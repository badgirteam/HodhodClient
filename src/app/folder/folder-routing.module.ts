import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { NegarComponent } from './negar/negar.component';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
  },
  {
    path: '/negar',
    component: NegarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
