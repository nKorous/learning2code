import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingCssComponent } from './using-css.component';

describe('UsingCssComponent', () => {
  let component: UsingCssComponent;
  let fixture: ComponentFixture<UsingCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
