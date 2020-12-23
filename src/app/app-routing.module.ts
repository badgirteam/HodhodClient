import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './core/service/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full',
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./modules/support/support.module').then((m) => m.SupportModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./modules/signup/signup.module').then((m) => m.SignUpModule),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./modules/tabs-page/tabs-page.module').then((m) => m.TabsModule),
  },
  {
    path: 'tutorial',
    loadChildren: () =>
      import('./modules/tutorial/tutorial.module').then(
        (m) => m.TutorialModule
      ),
    canLoad: [CheckTutorial],
  },
  {
    path: 'tweetnegar',
    loadChildren: () =>
      import('./modules/tweetnegar/tweetnegar.module').then(
        (m) => m.TweetnegarPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
