import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostbacktrackingComponent } from './postbacktracking.component';

describe('PostbacktrackingComponent', () => {
  let component: PostbacktrackingComponent;
  let fixture: ComponentFixture<PostbacktrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostbacktrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostbacktrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
