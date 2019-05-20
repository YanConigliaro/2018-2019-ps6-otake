import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTestimonialComponent } from './manage-testimonial.component';

describe('ManageTestimonialComponent', () => {
  let component: ManageTestimonialComponent;
  let fixture: ComponentFixture<ManageTestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
