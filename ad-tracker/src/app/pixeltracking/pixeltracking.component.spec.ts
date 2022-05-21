import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixeltrackingComponent } from './pixeltracking.component';

describe('PixeltrackingComponent', () => {
  let component: PixeltrackingComponent;
  let fixture: ComponentFixture<PixeltrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixeltrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PixeltrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
