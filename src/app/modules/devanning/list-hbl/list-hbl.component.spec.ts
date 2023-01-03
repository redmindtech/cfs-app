import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHBLComponent } from './list-hbl.component';

describe('ListHBLComponent', () => {
  let component: ListHBLComponent;
  let fixture: ComponentFixture<ListHBLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHBLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHBLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
