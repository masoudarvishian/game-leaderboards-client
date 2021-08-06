import { Component, OnInit } from '@angular/core';
import { LeaderboardOutputDto } from 'src/app/models/LeaderboardOutputDto';
import { PaginationDto } from 'src/app/models/PaginationDto';
import { LeaderboardService } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  leaderboardDto: LeaderboardOutputDto;
  public pagination: PaginationDto;

  constructor(private leaderboardService: LeaderboardService) {
    this.leaderboardDto = new LeaderboardOutputDto();
    this.pagination = new PaginationDto();
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.leaderboardService.getAll(this.pagination).subscribe({
      next: res => {
        this.leaderboardDto = Object.assign(this.leaderboardDto, res);
      },
      error: err => {
        console.error(err);
      }
    });
  }

  public onPageChange(pageNum: number): void {
    this.pagination.PageNumber = pageNum;
    this.getAll();
  }

  public changePagesize(num: number): void {
    console.log('page size changed: ' + num);
  }

}
