import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilamentsFormComponent } from './filaments-form.component';

describe('FilamentsFormComponent', () => {
  let component: FilamentsFormComponent;
  let fixture: ComponentFixture<FilamentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilamentsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilamentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
