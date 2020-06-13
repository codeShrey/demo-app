import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [
    TimerComponent,
    CounterComponent,
    HomeComponent,
    SliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TimerComponent,
    CounterComponent,
    HomeComponent,
    SliderComponent
  ]
})
export class DataModule { }
