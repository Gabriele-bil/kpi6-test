import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserIpService {

  constructor(private http: HttpClient) {
  }

  public getIp(): Observable<string> {
    return this.http.get<{ ip: string }>('https://api.ipify.org?format=json').pipe(map(({ ip }) => ip));
  }
}
