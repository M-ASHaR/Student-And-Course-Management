import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecoursesComponent } from './updatecourses.component';

describe('UpdatecoursesComponent', () => {
  let component: UpdatecoursesComponent;
  let fixture: ComponentFixture<UpdatecoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatecoursesComponent]
    });
    fixture = TestBed.createComponent(UpdatecoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
