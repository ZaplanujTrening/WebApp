import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseComponent } from './exercise.component';
import { RouterModule } from '@angular/router';
import { ExerciseRoutingModule } from './exercise-routing.module';



@NgModule({
  declarations: [
    ExerciseComponent,
    ExerciseListComponent
  ],
  imports: [
    CommonModule,
    ExerciseRoutingModule
  ]
})
export class ExerciseModule { }
