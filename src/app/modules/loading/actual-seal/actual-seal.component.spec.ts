import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualSealComponent } from './actual-seal.component';

describe('ActualSealComponent', () => {
  let component: ActualSealComponent;
  let fixture: ComponentFixture<ActualSealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualSealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualSealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
