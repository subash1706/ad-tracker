import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfflicateloakComponent } from './afflicateloak.component';

describe('AfflicateloakComponent', () => {
  let component: AfflicateloakComponent;
  let fixture: ComponentFixture<AfflicateloakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfflicateloakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfflicateloakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
