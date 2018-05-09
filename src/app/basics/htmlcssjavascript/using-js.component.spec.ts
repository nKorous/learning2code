import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingJsComponent } from './using-js.component';

describe('UsingJsComponent', () => {
  let component: UsingJsComponent;
  let fixture: ComponentFixture<UsingJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
