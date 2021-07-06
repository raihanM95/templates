import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  AllContactsTab: boolean = true;
  GoogleContactsTab: boolean;
  InvitationsContactsTab: boolean;
  constructor() { }

  onTab(number) {
    this.AllContactsTab = false;
    this.GoogleContactsTab = false;
    this.InvitationsContactsTab = false;

    if (number == '1') {
      this.AllContactsTab = true;
    }
    else if (number == '2') {
      this.GoogleContactsTab = true;
    }
    else if (number == '3') {
      this.InvitationsContactsTab = true;
    }
  }
  ngOnInit(): void {
  }

}
