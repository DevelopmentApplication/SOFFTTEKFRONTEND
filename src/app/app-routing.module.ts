import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent } from "./components/weather/weather.component";

const routes: Routes = [
  // { path: 'notFoud', component: WeatherComponent }, 
  // { path: '', component: WeatherComponent },     
  // { path: '**', redirectTo: 'notFoud'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
