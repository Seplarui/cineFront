import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {

  movies: any[];
  constructor(private dataApi: DataApiService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    // const numPagina = this._route.paramMap.subscribe(params => {
    //   const pagina = params.get('pagina');
    // });
    // console.log(numPagina);
    // this.getUpComingMovies(numPagina);
    // let pagina = this._route.snapshot.paramMap.get('page');
    let pagina = this.goPagina();
    console.log('kk ' + pagina);
    this.getUpComingMovies(pagina);

  }

  getUpComingMovies(pagina: any) {
    this.dataApi.getUpComingMovies(pagina).subscribe((response) => {
      this.movies = response;
    },
      (error) => { console.error(error); }
    );
    this.dataApi.getUpComingMovies(pagina).subscribe((movies) => console.log(movies));
  }
  goPagina() {
    console.log('this.goPagina');
    let pagina = this._route.snapshot.paramMap.get('page');
    return pagina;
    // this._router.navigate(['estrenos/', 10]);
  }

}
