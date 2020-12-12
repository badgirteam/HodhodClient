import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NegarComponent } from './negar.component';

describe('NegarComponent', () => {
  let component: NegarComponent;
  let fixture: ComponentFixture<NegarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NegarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
