import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './src/components/news/news.component';
import { SportsComponent } from './src/components/sports/sports.component';

const appRoutes: Routes = [
  { path: 'latest-news', component: NewsComponent},
  { path: 'sports', component: SportsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
