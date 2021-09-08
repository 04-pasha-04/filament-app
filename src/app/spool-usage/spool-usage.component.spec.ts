import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpoolUsageComponent } from './spool-usage.component';

describe('SpoolUsageComponent', () => {
  let component: SpoolUsageComponent;
  let fixture: ComponentFixture<SpoolUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpoolUsageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpoolUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
