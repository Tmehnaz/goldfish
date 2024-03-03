import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  longUrl: any = {};
  shortUrl: any = {};
  
  ngOnInit(){
    this.shortenUrl()
  }
  constructor(private http:HttpClient){ }
  
    
    shortenUrl(){
      this.http.post<any>('http://localhost:4200/api/shortenID', { longUrl: this.longUrl }).subscribe({
        next: (res)=> console.log(this.shortUrl)
      }
      
         
      );
      
  }
   

  }




