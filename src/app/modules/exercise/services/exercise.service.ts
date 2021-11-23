import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BaseApiService } from 'src/app/core/services/base-api.service';
import { Exercise } from '../models/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService extends BaseApiService {
  
  private _exercises: BehaviorSubject<Exercise[] | null> = new BehaviorSubject(null);

  constructor(private _httpClient: HttpClient) {
    super("exercise");
  }

  getAll(): Observable<Exercise[]>
  {
      return this._httpClient.get<Exercise[]>(this.getEndpoint(''), {}).pipe(
        tap((exercises) => {
            this._exercises.next(exercises);
        })
      );
  }
}
