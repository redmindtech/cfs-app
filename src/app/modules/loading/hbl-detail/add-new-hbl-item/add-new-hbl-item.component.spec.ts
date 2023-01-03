import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewHblItemComponent } from './add-new-hbl-item.component';

describe('AddNewHblItemComponent', () => {
  let component: AddNewHblItemComponent;
  let fixture: ComponentFixture<AddNewHblItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewHblItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewHblItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
