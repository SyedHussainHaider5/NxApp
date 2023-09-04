import { Route } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';

export const appRoutes: Route[] = [
  {
          path: '',
          loadChildren: () =>
            import('./loginform/loginform.component').then(
              (m) => m.LoginformComponent
            ),
        },
  // {
  //   path: '',
  //   component: LoginformComponent,
  // }
];
