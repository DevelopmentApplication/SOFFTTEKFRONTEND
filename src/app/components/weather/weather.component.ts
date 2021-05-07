import { Component, Input, OnInit } from '@angular/core';
import { CountryCoord, Weather } from "../../models/weather";
import { WeatherService } from "../../services/weather.service";
import { WebsocketService } from "../../services/websocket.service";
import { retry, switchMap } from "rxjs/operators";
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: Weather;
  loading: boolean = true;
  @Input() countryCoord: CountryCoord;
  hour: string;
  subscription: Subscription;

  constructor(private _weatherService:WeatherService, private _websocketService:WebsocketService) {
  }

  ngOnInit(): void {
    /**
     * se agrega un interval para reemplaza implementación de socket
     */
    setInterval(() => {
      this.loading = true;
      this.getaweatherLatLon()
    }, 10000);    
  }

  getaweatherLatLon(){
    this._weatherService.getaweatherLatLon(this.countryCoord.name)
    .pipe(
      retry()        
    )    
    .subscribe(res=>
      {
        this.weather = res;        
        this.hour = this.timeconvert(this.weather.dt, this.weather.timezone) 
        this.loading = false;
      },
      error=> console.log(error)      
    )
  }

  timeconvert(dt:number, timezone:number):string{
    const date = new Date(new Date(dt * 1000));
    var hours = new Date(new Date(date).setUTCSeconds(timezone)).getUTCHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
