import { Component, OnInit} from '@angular/core';
import { ShorturlService } from '../../shorturl.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  longUrl: string='';
  shortUrl: string = '';
 
  constructor(private shorturlService: ShorturlService){ }
  ngOnInit(): void {
      
  }
  
    shortenUrl(){

     this.shorturlService.shortenUrl(this.longUrl).subscribe({
        next: (response) =>{ 
          this.shortUrl = response.shortUrl;
        },
        error: error => {
          console.log("Error while doing POST request:", error);
        },
        complete: () => {
          console.log("Post Request Completed Successfully")
        }
       
      })
         
      
  }  

  
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

