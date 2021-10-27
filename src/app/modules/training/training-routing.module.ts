import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';
import { TrainingActiveComponent } from './training-active/training-active.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TrainingComponent,
    children: [
      {
        path: 'active',
        component: TrainingActiveComponent,
      },
      { path: '', redirectTo: 'active', pathMatch: 'full' },
      { path: '**', redirectTo: 'active', pathMatch: 'full' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutingModule { }
