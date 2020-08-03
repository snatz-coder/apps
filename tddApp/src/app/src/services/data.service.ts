import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  api_key = '52c0a3ab439b429d8bc114955b2b9375';

  constructor(private http:HttpClient) { }

  getNews$ (){
   return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey='+this.api_key);
  }
}
