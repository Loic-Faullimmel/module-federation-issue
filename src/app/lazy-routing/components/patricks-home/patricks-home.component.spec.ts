import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatricksHomeComponent } from './patricks-home.component';

describe('PatricksHomeComponent', () => {
  let component: PatricksHomeComponent;
  let fixture: ComponentFixture<PatricksHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatricksHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatricksHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
