import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPhotoPopupComponent } from './upload-photo-popup.component';

describe('UploadPhotoPopupComponent', () => {
  let component: UploadPhotoPopupComponent;
  let fixture: ComponentFixture<UploadPhotoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPhotoPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPhotoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
