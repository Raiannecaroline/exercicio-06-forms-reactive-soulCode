import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectiveDialogComponent } from './rective-dialog.component';

describe('RectiveDialogComponent', () => {
  let component: RectiveDialogComponent;
  let fixture: ComponentFixture<RectiveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectiveDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RectiveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
