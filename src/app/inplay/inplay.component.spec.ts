import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InplayComponent } from './inplay.component';

describe('InplayComponent', () => {
  let component: InplayComponent;
  let fixture: ComponentFixture<InplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
