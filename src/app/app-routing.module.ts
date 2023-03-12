import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BesStromComponent } from './bes-strom/bes-strom.component';
import { SpeedComponent } from './speed/speed.component';

const routes: Routes = [
  { path: '', redirectTo: 'strom', pathMatch: 'full' },
  { path: 'speed', component: SpeedComponent, data: {title: "Geschwindigkeit"} },
  { path: 'strom', component: BesStromComponent ,data: {title: "Beschickung für Strom"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
