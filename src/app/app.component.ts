import { Component, OnInit } from '@angular/core';
import { CountryCoord } from "./models/weather";
import { WeatherService } from "./services/weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test';
  countryCoords: any[] = [];
  loading:boolean = true;

  constructor(private _weatherService:WeatherService) { }

  ngOnInit(): void {
    this._weatherService.getallcoords()      
      .subscribe(
        res=>{
          this.countryCoords = res;
          this.loading = false;
        }
      )
  }
}
