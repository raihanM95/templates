import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors-profile',
  templateUrl: './doctors-profile.component.html',
  styleUrls: ['./doctors-profile.component.scss']
})
export class DoctorsProfileComponent implements OnInit {
  basicTab: boolean = true;
  accountTab: boolean;
  generalTab: boolean;
  isFull: boolean;
  isFull1: boolean;
  isFull2: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  fullScreenSection(number) {
    if (number == 1) {
      if (this.isFull) {
        this.isFull = false;
      }
      else {
        this.isFull = true;
      }
    }
    else if (number == 2) {
      if (this.isFull1) {
        this.isFull1 = false;
      }
      else {
        this.isFull1 = true;
      }
    }
    else if (number == 3) {
      if (this.isFull2) {
        this.isFull2 = false;
      }
      else {
        this.isFull2 = true;
      }
    }

  }

  onTab(number) {
    this.basicTab = false;
    this.accountTab = false;
    this.generalTab = false;

    if (number == '1') {
      this.basicTab = true;
    }
    else if (number == '2') {
      this.accountTab = true;
    }
    else if (number == '3') {
      this.generalTab = true;
    }
  }

}
