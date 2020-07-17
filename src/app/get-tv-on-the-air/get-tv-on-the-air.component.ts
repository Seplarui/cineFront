import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';


@Component({
  selector: 'app-get-tv-on-the-air',
  templateUrl: './get-tv-on-the-air.component.html',
  styleUrls: ['./get-tv-on-the-air.component.css']
})
export class GetTvOnTheAirComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  ngOnInit(): void {
    this.getTvOnTheAir();
  }

  getTvOnTheAir() {
    this.dataApi.getTvOnTheAir().subscribe((tvShows) => console.log(tvShows));
  }

}
