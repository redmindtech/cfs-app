import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevanningComponent } from './devanning.component';

describe('DevanningComponent', () => {
  let component: DevanningComponent;
  let fixture: ComponentFixture<DevanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
