import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }
  apiKey = 'd1c58472015c64a45032584cd1373753';

  getTvOnTheAir(page: string) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    console.log('page en dataApiServie: ' + page);

    const urlApi = `https://api.themoviedb.org/3/tv/on_the_air?api_key=d1c58472015c64a45032584cd1373753&language=es-ES&${page}`;

    console.log('dataApi: ' + urlApi);
    console.log('DataApi: ' + this.http.get(urlApi));
    return this.http.get<any>(urlApi);
  }

  // Detalles de una serie
  getTVShow() {

    const urlApi = ' https://api.themoviedb.org/3/tv/1403?api_key=d1c58472015c64a45032584cd1373753&language=es-ES';
  }
}


