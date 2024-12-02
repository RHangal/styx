import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolWorkPostsComponent } from './school-work-posts.component';

describe('SchoolWorkPostsComponent', () => {
  let component: SchoolWorkPostsComponent;
  let fixture: ComponentFixture<SchoolWorkPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolWorkPostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolWorkPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
