import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeScannerPopupComponent } from './barcode-scanner-popup.component';

describe('BarcodeScannerPopupComponent', () => {
  let component: BarcodeScannerPopupComponent;
  let fixture: ComponentFixture<BarcodeScannerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcodeScannerPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeScannerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
