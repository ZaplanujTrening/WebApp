import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseComponent } from './exercise.component';
import { ExerciseRoutingModule } from './exercise-routing.module';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    ExerciseComponent,
    ExerciseListComponent
  ],
  imports: [
    CommonModule,
    ExerciseRoutingModule,
    CardModule
  ]
})
export class ExerciseModule { }
