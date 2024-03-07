import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  longUrl: any = {};
  shortUrl: any = {};

  ngOninit(){
    this.shortenUrl();
  } 
  
 
  constructor(private http:HttpClient){ }
  ngOnInit(): void {
   this.shortenUrl();
  //  this.retrieveShortUrl();
  }
  
    
    shortenUrl(){
     return this.http.post<any>('http://localhost:5000/api/shortId', {longUrl: this.longUrl}).subscribe({
        next: (response) =>{ 
          this.shortUrl = response.shortUrl;
        },
        error: error => {
          console.log("Error while doing POST request:", error);
        },
        complete: () => {
          console.log("Post Request Completed Successfully")
        }
       
      }
         
      );   
  }  
  // retrieveShortUrl() {
  //   return this.http.get<any>('http://localhost:5000/:shortID').subscribe({
  //     next: (res) => {
  //       this.shortUrl = res.shortUrl
  //     },
  //     error: error => {
  //       console.log('Failed to retrieve shortUrl', error);
  //     },
  //     complete: () => {
  //       console.log('Get Request Was Successful')
  //     }
  //   })
  // }

  }




