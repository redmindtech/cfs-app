import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHblComponent } from './list-hbl.component';

describe('ListHblComponent', () => {
  let component: ListHblComponent;
  let fixture: ComponentFixture<ListHblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHblComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
