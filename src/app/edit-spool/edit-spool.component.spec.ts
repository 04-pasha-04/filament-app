import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpoolComponent } from './edit-spool.component';

describe('EditSpoolComponent', () => {
  let component: EditSpoolComponent;
  let fixture: ComponentFixture<EditSpoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSpoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
