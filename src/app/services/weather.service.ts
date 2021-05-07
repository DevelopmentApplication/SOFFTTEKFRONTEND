import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpResponse  } from '@angular/common/http';
import { Weather, CountryCoord } from "../models/weather";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  /**
   * Obtiene arreglo de coordenadas
   * @returns CountryCoord[]
   */
  getallcoords(): Observable<CountryCoord[]> {
    return this.http.get<CountryCoord[]>(`${environment.baseUrl}/initial`);
  }

  /**
   * Obtiene clima por nombre de Pais
   * @param city_name 
   * @returns Weather
   */
  getaweatherLatLon(city_name): Observable<Weather> {
    return this.http.get<Weather>(`${environment.baseUrl}/weather/${city_name}`);
  }
}
