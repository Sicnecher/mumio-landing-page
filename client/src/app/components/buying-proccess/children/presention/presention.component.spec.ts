import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentionComponent } from './presention.component';

describe('PresentionComponent', () => {
  let component: PresentionComponent;
  let fixture: ComponentFixture<PresentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
