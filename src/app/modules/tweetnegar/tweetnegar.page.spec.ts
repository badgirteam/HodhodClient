import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TweetnegarPage } from './tweetnegar.page';

describe('TweetnegarPage', () => {
  let component: TweetnegarPage;
  let fixture: ComponentFixture<TweetnegarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetnegarPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(TweetnegarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
