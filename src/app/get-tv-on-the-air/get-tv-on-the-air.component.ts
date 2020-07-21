import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';


@Component({
  selector: 'app-get-tv-on-the-air',
  templateUrl: './get-tv-on-the-air.component.html',
  styleUrls: ['./get-tv-on-the-air.component.css']
})

export class GetTvOnTheAirComponent implements OnInit {
  page: string;
  tvShows: any[];
  constructor(private dataApi: DataApiService, private rutaActiva: ActivatedRoute) {
    console.log(this.rutaActiva.snapshot.paramMap.get('page'));
    const page = this.rutaActiva.snapshot.paramMap.get('page');
  }

  ngOnInit(): void {
    this.getTvOnTheAir();
    this.page = this.rutaActiva.snapshot.params.page;
  }

  getTvOnTheAir() {

    // this.rutaActiva.params.subscribe(
    //   (params: Params) => {
    //     this.page = params.page;
    //   }
    // );
    console.log(this.page);
    this.dataApi.getTvOnTheAir(this.page).subscribe((response) => {
      this.tvShows = response;
    },
      (error) => { console.error(error); }
    );

    this.dataApi.getTvOnTheAir(this.page).subscribe((tvShows) => console.log(tvShows));

  }

}
