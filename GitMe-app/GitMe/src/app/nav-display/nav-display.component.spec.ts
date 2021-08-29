import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDisplayComponent } from './nav-display.component';

describe('NavDisplayComponent', () => {
  let component: NavDisplayComponent;
  let fixture: ComponentFixture<NavDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
