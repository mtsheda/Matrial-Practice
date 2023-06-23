import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APPLYComponent } from './apply.component';

describe('APPLYComponent', () => {
  let component: APPLYComponent;
  let fixture: ComponentFixture<APPLYComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APPLYComponent]
    });
    fixture = TestBed.createComponent(APPLYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
