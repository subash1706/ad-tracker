import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpctrackingComponent } from './ppctracking.component';

describe('PpctrackingComponent', () => {
  let component: PpctrackingComponent;
  let fixture: ComponentFixture<PpctrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpctrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpctrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
