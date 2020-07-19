import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-get-tv-on-the-air',
  templateUrl: './get-tv-on-the-air.component.html',
  styleUrls: ['./get-tv-on-the-air.component.css']
})
export class GetTvOnTheAirComponent implements OnInit {

  tvShows: any[];
  constructor(private dataApi: DataApiService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTvOnTheAir();
  }

  getTvOnTheAir() {

    const page = this._route.snapshot.paramMap.get('page');
    console.log(page);

    this.dataApi.getTvOnTheAir(page).subscribe((response) => {
      this.tvShows = response;
    },
      (error) => { console.error(error); }
    );

    this.dataApi.getTvOnTheAir(page).subscribe((tvShows) => console.log(tvShows));
  }

}
