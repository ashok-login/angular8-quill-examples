import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quill-example02',
  templateUrl: './quill-example02.component.html',
  styleUrls: ['./quill-example02.component.css']
})
export class QuillExample02Component implements OnInit {
  public editor_modules: any;
  constructor() { }

  ngOnInit() {
    this.init_editor_modules();
  }

  init_editor_modules(): void {
    this.editor_modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],
    
        [{ 'header': 1 }, { 'header': 2 }], // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }], // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }], // outdent/indent
        [{ 'direction': 'rtl' }], // text direction
    
        [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
        [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
    
        ['clean'], // remove formatting button
    
        ['link', 'image', 'video'] // link and image, video
      ]
    };
  }
}
