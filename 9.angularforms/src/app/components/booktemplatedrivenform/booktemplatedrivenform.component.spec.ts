import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktemplatedrivenformComponent } from './booktemplatedrivenform.component';

describe('BooktemplatedrivenformComponent', () => {
  let component: BooktemplatedrivenformComponent;
  let fixture: ComponentFixture<BooktemplatedrivenformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooktemplatedrivenformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooktemplatedrivenformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
