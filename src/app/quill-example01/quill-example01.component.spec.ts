import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillExample01Component } from './quill-example01.component';

describe('QuillExample01Component', () => {
  let component: QuillExample01Component;
  let fixture: ComponentFixture<QuillExample01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuillExample01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuillExample01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
