import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavlogoutComponent } from './navlogout.component';

describe('NavlogoutComponent', () => {
  let component: NavlogoutComponent;
  let fixture: ComponentFixture<NavlogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavlogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
