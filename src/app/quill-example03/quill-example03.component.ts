import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quill-example03',
  templateUrl: './quill-example03.component.html',
  styleUrls: ['./quill-example03.component.css']
})
export class QuillExample03Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.setPlaceHolders();
  }

  setPlaceHolders() : void {
    let editor = this.container.nativeElement.querySelector('#editor');
    this.editor = new Quill(editor, {
                  theme: 'snow',
                  placeholder: this.placeholder
                });
  }

}
