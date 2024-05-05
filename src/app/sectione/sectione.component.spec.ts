import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectioneComponent } from './sectione.component';

describe('SectioneComponent', () => {
  let component: SectioneComponent;
  let fixture: ComponentFixture<SectioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectioneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
