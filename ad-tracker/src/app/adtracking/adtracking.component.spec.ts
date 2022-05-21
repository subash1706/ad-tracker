import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdtrackingComponent } from './adtracking.component';

describe('AdtrackingComponent', () => {
  let component: AdtrackingComponent;
  let fixture: ComponentFixture<AdtrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdtrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdtrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
