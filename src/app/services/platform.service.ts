import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../models/constants';
import { PlatformDto } from '../models/PlatformDto';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<PlatformDto[]>(`${BASE_URL}/Platform`);
  }
}
