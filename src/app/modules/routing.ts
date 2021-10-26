import { Routes } from '@angular/router';

const Routing: Routes = [
    {
      path: 'exercise',
      loadChildren: () =>
        import('./exercise/exercise.module').then((m) => m.ExerciseModule),
    },
    {
      path: '',
      redirectTo: '/exercise/list',
      pathMatch: 'full',
    },
];
  
export { Routing };