import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ``, loadChildren: () =>
    import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `about`, loadChildren: () =>
    import('./features/about/about.module').then(m => m.AboutModule)
  },
  {
    path: `personajes`, loadChildren: () =>
    import('./features/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: `register`, loadChildren: () =>
    import('./features/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: `login`, loadChildren: () =>
    import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: `user`, loadChildren: () =>
    import('./features/user-profile/user-profile.module').then(m => m.UserProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: `episodios`, loadChildren: () =>
    import('./features/episodios/episodios.module').then(m => m.EpisodiosModule),
    canActivate: [AuthGuard]
  },
  {
    path: `planetas`, loadChildren: () =>
    import('./features/planetas/planetas.module').then(m => m.PlanetasModule),
    canActivate: [AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
