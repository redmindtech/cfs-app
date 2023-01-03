import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFailStatusComponent } from './save-fail-status.component';

describe('SaveFailStatusComponent', () => {
  let component: SaveFailStatusComponent;
  let fixture: ComponentFixture<SaveFailStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveFailStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveFailStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
