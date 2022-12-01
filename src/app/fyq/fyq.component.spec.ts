import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FYQComponent } from './fyq.component';

describe('FYQComponent', () => {
  let component: FYQComponent;
  let fixture: ComponentFixture<FYQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FYQComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FYQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
