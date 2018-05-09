import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlcssjavascriptComponent } from './htmlcssjavascript.component';

describe('HtmlcssjavascriptComponent', () => {
  let component: HtmlcssjavascriptComponent;
  let fixture: ComponentFixture<HtmlcssjavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlcssjavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlcssjavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
