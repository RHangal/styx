import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingPostsComponent } from './cooking-posts.component';

describe('CookingPostsComponent', () => {
  let component: CookingPostsComponent;
  let fixture: ComponentFixture<CookingPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookingPostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookingPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
