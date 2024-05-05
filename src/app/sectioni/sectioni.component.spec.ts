import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectioniComponent } from './sectioni.component';

describe('SectioniComponent', () => {
  let component: SectioniComponent;
  let fixture: ComponentFixture<SectioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectioniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
