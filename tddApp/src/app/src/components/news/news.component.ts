import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})

export class NewsComponent implements OnInit {

   articles: Array<any>;

  constructor( private dataService: DataService) {
    console.log('app component constructor called'); 
   }

  ngOnInit() {
     this.dataService.getNews$().subscribe( data => this.articles = data['articles']);
  }

}
