import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Exercise } from '../models/exercise.model';
import { ExerciseService } from '../services/exercise.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseListComponent implements OnInit {

  display: boolean = false;

  sortOptions: SelectItem[];
  
  sortOrder: number;

  sortField: string;

  selectedExercises: Exercise[] = [];
  exercise: Exercise = { id: 1, name: "", description: "", musclePart: { id: 1, partName: "" } };
  exercises: Exercise[];

  constructor(private _exerciseService: ExerciseService, private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._exerciseService.getAll().subscribe((results: Exercise[]) => {
      this.exercises = results;
      this._changeDetectorRef.markForCheck();
      // console.log(this.exercises);
    });
  }

  onSortChange(event: { value: any; }) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

  openModal(exercise: Exercise)
  {
    this.exercise = exercise;
    this.display = true;
  }
  
  addExercise()
  {
    this.selectedExercises.push(this.exercise);
    this.exercises.push(this.exercise);
    this.display = false;
    this._changeDetectorRef.markForCheck();
  }
}
