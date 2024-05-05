import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiondComponent } from './sectiond.component';

describe('SectiondComponent', () => {
  let component: SectiondComponent;
  let fixture: ComponentFixture<SectiondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectiondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectiondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
