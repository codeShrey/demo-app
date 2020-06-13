import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimerComponent } from '../data/timer/timer.component';
import { CounterComponent } from '../data/counter/counter.component';
import { SliderComponent } from '../data/slider/slider.component';
import { HomeComponent } from '../data/home/home.component';


const routes: Routes = [ {path:'',component: HomeComponent},
{path:'timer',component: TimerComponent},
{path:'counter',component: CounterComponent},
{path:'slider',component: SliderComponent},
{path:'**',component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UIRoutingModule { }
