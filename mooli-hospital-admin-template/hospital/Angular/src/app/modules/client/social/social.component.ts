import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  FeedTab: boolean = true;
  ActivityTab: boolean;
  FriendsTab: boolean;
  constructor() { }

  onTab(number) {
    this.FeedTab = false;
    this.ActivityTab = false;
    this.FriendsTab = false;

    if (number == '1') {
      this.FeedTab = true;
    }
    else if (number == '2') {
      this.ActivityTab = true;
    }
    else if (number == '3') {
      this.FriendsTab = true;
    }
  }
  ngOnInit(): void {
  }

}
