import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeyPatrickComponent } from './hey-patrick.component';

describe('HeyPatrickComponent', () => {
  let component: HeyPatrickComponent;
  let fixture: ComponentFixture<HeyPatrickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeyPatrickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeyPatrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
