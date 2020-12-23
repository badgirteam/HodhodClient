import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TweetnegarPageRoutingModule } from './tweetnegar-routing.module';

import { TweetnegarPage } from './tweetnegar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TweetnegarPageRoutingModule,
  ],
  declarations: [TweetnegarPage],
})
export class TweetnegarPageModule {}
