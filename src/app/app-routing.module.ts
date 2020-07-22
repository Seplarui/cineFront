import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GetTvOnTheAirComponent } from '../app/components/get-tv-on-the-air/get-tv-on-the-air.component';
import { UpcomingMoviesComponent } from './components/upcoming-movies/upcoming-movies.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'series/:page', component: GetTvOnTheAirComponent },
  { path: 'series', component: GetTvOnTheAirComponent },
  { path: 'estrenos', component: UpcomingMoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
