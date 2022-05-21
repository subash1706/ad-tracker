import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversiontrackingComponent } from './conversiontracking.component';

describe('ConversiontrackingComponent', () => {
  let component: ConversiontrackingComponent;
  let fixture: ComponentFixture<ConversiontrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversiontrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversiontrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
