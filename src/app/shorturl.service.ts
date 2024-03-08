import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShorturlService {

  constructor(private http: HttpClient) { }

  shortenUrl(longUrl:string): Observable<any>{
    return this.http.post<any>('http://localhost:5000/api/shortId',{longUrl});
  }
}
