import { Routes } from '@angular/router';

const Routing: Routes = [
    {
      path: 'exercise',
      loadChildren: () =>
        import('./exercise/exercise.module').then((m) => m.ExerciseModule),
    },
    {
      path: 'training',
      loadChildren: () =>
        import('./training/training.module').then((m) => m.TrainingModule),
    },
    {
      path: 'auth',
      loadChildren: () =>
        import('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
      path: '',
      redirectTo: '/exercise/list',
      pathMatch: 'full',
    },
];
  
export { Routing };