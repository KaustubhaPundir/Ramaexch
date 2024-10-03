import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchComponent } from './exch.component';

describe('ExchComponent', () => {
  let component: ExchComponent;
  let fixture: ComponentFixture<ExchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
