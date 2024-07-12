import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiWeatherService {

  apiUrl = 'http://localhost/weatherapi/api'

  constructor(private http: HttpClient) { }

  getweather(city: string): Observable<any> {
    const url = `${this.apiUrl}/getweather/${encodeURIComponent(city)}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  get5DayForecast(city: string): Observable<any> {
    const url = `${this.apiUrl}/fivedaysweather/${encodeURIComponent(city)}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }


  getWeatherByCoordinates(lat: number, lon: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getweatherbycoordinates?lat=${lat}&lon=${lon}`);
  }

  get5DayForecastByCoordinates(lat: number, lon: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/fivedaysweatherbycoordinates?lat=${lat}&lon=${lon}`);
  }


  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }



}
