import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';
import { TrainingActiveComponent } from './training-active/training-active.component';
import { TrainingRoutingModule } from './training-routing.module';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [
    TrainingComponent,
    TrainingActiveComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    CarouselModule,
    ButtonModule,
    CardModule,
    SkeletonModule
  ]
})
export class TrainingModule { }
