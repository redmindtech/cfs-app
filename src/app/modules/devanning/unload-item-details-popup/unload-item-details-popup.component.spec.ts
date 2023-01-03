import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnloadItemDetailsPopupComponent } from './unload-item-details-popup.component';

describe('UnloadItemDetailsPopupComponent', () => {
  let component: UnloadItemDetailsPopupComponent;
  let fixture: ComponentFixture<UnloadItemDetailsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnloadItemDetailsPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnloadItemDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
