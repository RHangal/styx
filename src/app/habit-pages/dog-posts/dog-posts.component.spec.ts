import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogPostsComponent } from './dog-posts.component';

describe('DogPostsComponent', () => {
  let component: DogPostsComponent;
  let fixture: ComponentFixture<DogPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogPostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
