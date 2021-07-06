import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.scss']
})
export class LeftmenuComponent implements OnInit {
  isCollapsed = true;
  Pagecollapse = true;
  PaymentCollapsed = true;
  RoomCollapsed = true;
  PatientCollapsed = true;
  constructor(private router: Router, @Inject(AppComponent) private app: AppComponent) {
    if ((this.router.url).includes('doctors')) {
      this.isCollapsed = false;
    }

    if ((this.router.url).includes('pages')) {
      this.Pagecollapse = false;
    }
    if ((this.router.url).includes('payments')) {
      this.PaymentCollapsed = false;
    }

    if ((this.router.url).includes('room-allotment')) {
      this.RoomCollapsed = false;
    }
    if ((this.router.url).includes('patients')) {
      this.PatientCollapsed = false;
    }
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {

    setTimeout(() => {

      if (this.router.url.includes('cryptocurrency')) {
        this.app.themeColor('o');
      }
      else if (this.router.url.includes('campaign')) {
        this.app.themeColor('b');
      }
      else if (this.router.url.includes('ecommerce')) {
        this.app.themeColor('a');
      }
      else {
        this.app.themeColor('g');
      }
      const className = document.getElementById('left-sidebar');
      let colorClassName = document.getElementsByClassName('theme-bg');
      if (sessionStorage.getItem("Sidebar") != "" && sessionStorage.getItem("Sidebar") != null) {
        className.classList.add(sessionStorage.getItem("Sidebar"));
      }
      else {
        className.classList.remove('light_active');
      }
      for (let index = 0; index < colorClassName.length; index++) {
        const element = colorClassName[index];
        if (sessionStorage.getItem("GradientColor") != "" && sessionStorage.getItem("GradientColor") != null) {
          element.classList.add('gradient');
        }
        else {
          element.classList.remove('gradient');
        }
      }
    });
  }

  showDropDown() {
    document.getElementById('drp').classList.toggle("ShowDiv")
  }

  toggleMenu() {
    const body = document.getElementsByTagName('body')[0];

    if (body.classList.contains('toggle_menu_active')) {
      body.classList.remove('toggle_menu_active');
    }
    else {
      body.classList.add('toggle_menu_active');
    }
  }
  cToggoleMenu() {
    const body = document.getElementsByTagName('body')[0].classList.remove("offcanvas-active");
    document.getElementsByClassName('overlay')[0].classList.toggle("open");
  }

}
