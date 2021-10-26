import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseComponent } from './exercise.component';

const routes: Routes = [
  {
    path: '',
    component: ExerciseComponent,
    children: [
      {
        path: 'lists',
        component: ExerciseListComponent,
      },
      { path: '', redirectTo: 'lists', pathMatch: 'full' },
      { path: '**', redirectTo: 'lists', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseModule { }
