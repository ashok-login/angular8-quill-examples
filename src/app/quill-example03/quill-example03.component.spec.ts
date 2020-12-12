import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillExample03Component } from './quill-example03.component';

describe('QuillExample03Component', () => {
  let component: QuillExample03Component;
  let fixture: ComponentFixture<QuillExample03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuillExample03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuillExample03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
