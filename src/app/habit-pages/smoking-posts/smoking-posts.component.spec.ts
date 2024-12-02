import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokingPostsComponent } from './smoking-posts.component';

describe('SmokingPostsComponent', () => {
  let component: SmokingPostsComponent;
  let fixture: ComponentFixture<SmokingPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmokingPostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmokingPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
