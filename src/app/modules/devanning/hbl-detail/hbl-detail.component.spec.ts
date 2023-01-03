import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HblDetailComponent } from './hbl-detail.component';

describe('HblDetailComponent', () => {
  let component: HblDetailComponent;
  let fixture: ComponentFixture<HblDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HblDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HblDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
