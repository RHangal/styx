import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisePostsComponent } from './exercise-posts.component';

describe('ExercisePostsComponent', () => {
  let component: ExercisePostsComponent;
  let fixture: ComponentFixture<ExercisePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercisePostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercisePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
