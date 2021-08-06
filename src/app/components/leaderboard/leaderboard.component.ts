import { Component, OnInit } from '@angular/core';
import { LeaderboardOutputDto } from 'src/app/models/LeaderboardOutputDto';
import { PaginationDto } from 'src/app/models/PaginationDto';
import { PlatformDto } from 'src/app/models/PlatformDto';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { PlatformService } from 'src/app/services/platform.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  platforms: PlatformDto[];
  leaderboardDto: LeaderboardOutputDto;
  pagination: PaginationDto;
  selectedRaceId: Number;

  constructor(private leaderboardService: LeaderboardService, private platformService: PlatformService) {
    this.leaderboardDto = new LeaderboardOutputDto();
    this.pagination = new PaginationDto();
    this.platforms = [];
  }

  ngOnInit() {
    this.getLeaderboard();
    this.getPlatforms();
  }

  getLeaderboard() {
    this.leaderboardService.getAll(this.pagination).subscribe({
      next: res => {
        this.leaderboardDto = Object.assign(this.leaderboardDto, res);
      },
      error: err => {
        console.error(err);
      }
    });
  }

  getPlatforms() {
    this.platformService.getAll().subscribe({
      next: res => {
        this.platforms = Object.assign(this.platforms, res);
        console.log(this.platforms);
      },
      error: err => {
        console.error(err);
      }
    });
  }

  onPageChange(pageNum: number): void {
    this.pagination.PageNumber = pageNum;
    this.getLeaderboard();
  }

  changePagesize(num: number): void {
    console.log('page size changed: ' + num);
  }

  handlePlatform(event) {
    this.pagination.PlatformId = event.target.value;
    this.getLeaderboard();
  }

  raceIdChange(event) {

    let value = event.target.value;

    if (!value) {
      value = -1;
    }

    this.pagination.RaceId = value;
  }

}
