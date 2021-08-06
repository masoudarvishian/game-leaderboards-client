import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../models/constants';
import { LeaderboardOutputDto } from '../models/LeaderboardOutputDto';
import { PaginationDto } from '../models/PaginationDto';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  
  constructor(private http: HttpClient) { }

  getAll(pagination: PaginationDto) {

    let params = new HttpParams();
    params = params.append('PageNumber', String(pagination.PageNumber));
    params = params.append('PageSize', String(pagination.PageSize));
    params = params.append('PlatformId', String(pagination.PlatformId));
    params = params.append('RaceId', String(pagination.RaceId));

    return this.http.get<LeaderboardOutputDto[]>(`${BASE_URL}/Leaderboard`, {
      params: params
    });
  }
}
