import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {

  movies: any[];
  constructor(private dataApi: DataApiService) { }

  ngOnInit(): void {
    this.getUpComingMovies();
  }

  getUpComingMovies() {
    this.dataApi.getUpComingMovies().subscribe((response) => {
      this.movies = response;
    },
      (error) => { console.error(error); }
    );
    this.dataApi.getUpComingMovies().subscribe((movies) => console.log(movies));
  }

}
