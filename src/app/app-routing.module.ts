import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GetTvOnTheAirComponent } from './get-tv-on-the-air/get-tv-on-the-air.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'series/:page', component: GetTvOnTheAirComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
