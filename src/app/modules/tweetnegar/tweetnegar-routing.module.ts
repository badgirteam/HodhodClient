import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TweetnegarPage } from './tweetnegar.page';

const routes: Routes = [
  {
    path: '',
    component: TweetnegarPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TweetnegarPageRoutingModule {}
