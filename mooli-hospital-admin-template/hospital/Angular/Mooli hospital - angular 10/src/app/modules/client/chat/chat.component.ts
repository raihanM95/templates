import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  contactTab: boolean;
  groupTab: boolean;
  chatTab: boolean = true;
  status: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }
  onTab(number) {
    this.chatTab = false;
    this.groupTab = false;
    this.contactTab = false;
    if (number == '1') {
      this.chatTab = true;
    }
    else if (number == '2') {
      this.groupTab = true;
    }
    else if (number == '3') {
      this.contactTab = true;
    }
  }
  userchat() {
    this.status = !this.status;
  }
}
