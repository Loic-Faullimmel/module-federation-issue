import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatricksRouterComponent } from './patricks-router.component';

describe('PatricksRouterComponent', () => {
  let component: PatricksRouterComponent;
  let fixture: ComponentFixture<PatricksRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatricksRouterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatricksRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
