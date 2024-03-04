import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  longUrl: any = {};
  shortUrl: any = {};
  
  ngOnInit(): void{
    this.shortenUrl();
  }
  constructor(private http:HttpClient){ }
  
    
    shortenUrl(){
      this.http.post<any>('http://localhost:5000/api/shortenID', { longUrl: this.longUrl }).subscribe({
        next: (response) =>{ 
          this.shortUrl = response.shortUrl;
        },
        error: error => {
          console.log("Error Loading the Page:", error);
        },
        complete: () => {
          console.log("Request Completed Successfully")
        }


       
      }
      
         
      );
      
  }
   

  }




