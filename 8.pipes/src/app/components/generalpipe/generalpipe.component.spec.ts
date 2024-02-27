import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralpipeComponent } from './generalpipe.component';

describe('GeneralpipeComponent', () => {
  let component: GeneralpipeComponent;
  let fixture: ComponentFixture<GeneralpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralpipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
