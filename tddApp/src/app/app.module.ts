import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HeaderComponent } from './src/components/header/header.component';
import { NewsComponent } from './src/components/news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './src/services/data.service';
import { SportsComponent } from './src/components/sports/sports.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
