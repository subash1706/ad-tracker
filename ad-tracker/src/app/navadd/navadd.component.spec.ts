import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavaddComponent } from './navadd.component';

describe('NavaddComponent', () => {
  let component: NavaddComponent;
  let fixture: ComponentFixture<NavaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
