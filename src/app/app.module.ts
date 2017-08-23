import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import {routing} from './app.routing';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { SeattleComponent } from './seattle/seattle.component';
import {WeatherService} from './weather.service';
import { ChicagoComponent } from './chicago/chicago.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeattleComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,FormsModule, // <-- Include module in our AppModules
		HttpModule ,// <-- Include module in our AppModules
    routing
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
