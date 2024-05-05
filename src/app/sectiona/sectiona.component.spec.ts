import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionaComponent } from './sectiona.component';

describe('SectionaComponent', () => {
  let component: SectionaComponent;
  let fixture: ComponentFixture<SectionaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
