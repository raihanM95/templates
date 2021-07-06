import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-compose-email',
  templateUrl: './compose-email.component.html',
  styleUrls: ['./compose-email.component.scss']
})
export class ComposeEmailComponent implements OnInit {

  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit(): void {
  }

}
