import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';


@Component({
  selector: 'app-get-tv-on-the-air',
  templateUrl: './get-tv-on-the-air.component.html',
  styleUrls: ['./get-tv-on-the-air.component.css']
})

export class GetTvOnTheAirComponent implements OnInit {

  tvShows: any[];
  constructor(private dataApi: DataApiService, ) {

  }

  ngOnInit(): void {
    this.getTvOnTheAir();
  }

  getTvOnTheAir() {


    this.dataApi.getTvOnTheAir().subscribe((response) => {
      this.tvShows = response;
    },
      (error) => { console.error(error); }
    );

    this.dataApi.getTvOnTheAir().subscribe((tvShows) => console.log(tvShows));

  }

}
