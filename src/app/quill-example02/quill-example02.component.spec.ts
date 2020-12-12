import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillExample02Component } from './quill-example02.component';

describe('QuillExample02Component', () => {
  let component: QuillExample02Component;
  let fixture: ComponentFixture<QuillExample02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuillExample02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuillExample02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
