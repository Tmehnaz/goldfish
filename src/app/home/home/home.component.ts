import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  longUrl: any = {};
  shortUrl: any = {};

  ngOninit(){
    this.shortenUrl();
  } 
  
 
  constructor(private http:HttpClient){ }
  ngOnInit(): void {
   this.shortenUrl()
  }
  
    
    shortenUrl(){
     return this.http.post<any>('http://localhost:5000/api/shortenID', {longUrl: this.longUrl}).subscribe({
        next: (res) =>{ 
          this.shortUrl = res.shortUrl;
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




