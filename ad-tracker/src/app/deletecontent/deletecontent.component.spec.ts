import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecontentComponent } from './deletecontent.component';

describe('DeletecontentComponent', () => {
  let component: DeletecontentComponent;
  let fixture: ComponentFixture<DeletecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
