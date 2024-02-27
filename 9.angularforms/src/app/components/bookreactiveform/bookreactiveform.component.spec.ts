import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookreactiveformComponent } from './bookreactiveform.component';

describe('BookreactiveformComponent', () => {
  let component: BookreactiveformComponent;
  let fixture: ComponentFixture<BookreactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookreactiveformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookreactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
