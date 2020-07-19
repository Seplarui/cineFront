import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';


@Component({
  selector: 'app-get-tv-on-the-air',
  templateUrl: './get-tv-on-the-air.component.html',
  styleUrls: ['./get-tv-on-the-air.component.css']
})
export class GetTvOnTheAirComponent implements OnInit {

  tvShows: any[];
  constructor(private dataApi: DataApiService) { }

  ngOnInit(): void {
    this.getTvOnTheAir();
  }

  getTvOnTheAir() {
    // this.dataApi.getTvOnTheAir();
    // this.dataApi.getTvOnTheAir().subscribe((data) => { this.tvShows = data['results']; },
    //   (error) => { console.error(error); });
    // this.dataApi.getTvOnTheAir().subscribe((response) => {
    //   this.tvShows = response['results'];
    // },

    //   (error) => console.log('KK ERROR: ' + error));
    // console.log('kk ' + this.dataApi.getTvOnTheAir().subscribe((response) => {
    //   this.tvShows = response['results'];
    // }));

    // this.dataApi.getTvOnTheAir().subscribe((tvShows) => console.log(tvShows));
    this.dataApi.getTvOnTheAir().subscribe((response) => {
      this.tvShows = response;
      console.log("mierda " + this.tvShows['results'][0].name);
      console.log("mierda 2 " + this.tvShows['page']);
      console.log("mierda 3 " + this.tvShows['total_pages']);
    });
    console.log(this.tvShows);

    // console.log("kk: " + this.tvShows);
  }

}
