import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachSpoolComponent } from './attach-spool.component';

describe('AttachSpoolComponent', () => {
  let component: AttachSpoolComponent;
  let fixture: ComponentFixture<AttachSpoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachSpoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachSpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
