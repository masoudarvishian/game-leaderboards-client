import { Component, OnInit } from '@angular/core';
import { LeaderboardOutputDto } from 'src/app/models/LeaderboardOutputDto';
import { PaginationDto } from 'src/app/models/PaginationDto';
import { LeaderboardService } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.sass']
})
export class LeaderboardComponent implements OnInit {

  list: LeaderboardOutputDto[];
  pagination: PaginationDto;

  constructor(private leaderboardService: LeaderboardService) { 
    this.list = [];
    this.pagination = new PaginationDto();
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.leaderboardService.getAll(this.pagination).subscribe({
      next: res => {
        this.list = Object.assign(this.list, res);
        console.log(this.list);
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
