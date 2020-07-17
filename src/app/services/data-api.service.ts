import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }


  getTvOnTheAir() {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const urlApi = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=d1c58472015c64a45032584cd1373753&language=es-ES&page=1';
    return this.http.get(urlApi);
  }
}


