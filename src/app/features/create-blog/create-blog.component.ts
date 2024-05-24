import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.css'
})
export class CreateBlogComponent implements OnInit, OnDestroy {

  editor: Editor = new Editor(); // Initialize directly
  html: string = '';
  constructor() {}

  ngOnInit(): void {

  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
