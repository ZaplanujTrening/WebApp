import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseComponent } from './exercise.component';
import { ExerciseRoutingModule } from './exercise-routing.module';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { TimelineModule } from 'primeng/timeline';

@NgModule({
  declarations: [
    ExerciseComponent,
    ExerciseListComponent
  ],
  imports: [
    CommonModule,
    ExerciseRoutingModule,
    CardModule,
    FormsModule,
    ButtonModule,
    SkeletonModule,
    AccordionModule,
    TabViewModule,
    MessagesModule,
    MessageModule,
    DialogModule,
    InputTextModule,
    DataViewModule,
    DropdownModule,
    TimelineModule
  ]
})
export class ExerciseModule { }
