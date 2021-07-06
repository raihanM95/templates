import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { ChatComponent } from './modules/client/chat/chat.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Mooli';
  greenClass: boolean = true;
  orageClass: boolean;
  blushClass: boolean;
  cyanClass: boolean;
  timberClass: boolean;
  blueClass: boolean;
  amethystClass: boolean;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) { }
  ngOnInit(): void {
    sessionStorage.setItem("Sidebar", "light_active");
    sessionStorage.setItem("GradientColor", "gradient");

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
      .subscribe(() => {

        var rt = this.getChild(this.activatedRoute)

        rt.data.subscribe(data => {
          this.titleService.setTitle(data.title)
        })
      });

    setTimeout(() => {

      document.getElementsByClassName('page-loader-wrapper')[0].classList.add("HideDiv");

    }, 1000);
  }

  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }

  }
  toggleThemeSetting() {
    const className = document.getElementsByClassName('themesetting')[0];
    className.classList.toggle('open');
  }
  ToggleLight(e) {
    const className = document.getElementById('left-sidebar')
    if (e.target.checked) {
      sessionStorage.setItem("Sidebar", "light_active");
      className.classList.add('light_active');
    }
    else {
      sessionStorage.setItem("Sidebar", "");
      className.classList.remove('light_active');
    }

  }
  ToggleGradient(e) {
    const className = document.getElementsByClassName('theme-bg');

    for (let index = 0; index < className.length; index++) {
      const element = className[index];
      if (e.target.checked) {
        element.classList.add('gradient');
        sessionStorage.setItem("GradientColor", "gradient");
      }
      else {
        element.classList.remove('gradient');
        sessionStorage.setItem("GradientColor", "");
      }
    }

  }
  ToggleDarkMode(e) {
    const className = document.getElementById('MooliHtml')
    if (e.target.checked) {
      className.setAttribute('data-theme', 'dark');
    }
    else {
      className.setAttribute('data-theme', 'light');
    }
  }
  ToggleRTL(e) {
    const body = document.getElementsByTagName('body')[0];
    if (e.target.checked) {
      body.classList.add('rtl_active');
    }
    else {
      body.classList.remove('rtl_active');
    }
  }


  themeColor(color) {
    this.greenClass = false;
    this.orageClass = false;
    this.blushClass = false;
    this.cyanClass = false;
    this.timberClass = false;
    this.blueClass = false;
    this.amethystClass = false;
    const className = document.getElementById('body');
    className.removeAttribute("class")
    if (color == "g") {
      this.greenClass = true;
      className.classList.add('theme-green');
    }
    else if (color == "o") {
      this.orageClass = true;
      className.classList.add('theme-orange');
    }
    else if (color == "b") {
      this.blushClass = true;
      className.classList.add('theme-blush');
    }
    else if (color == "c") {
      this.cyanClass = true;
      className.classList.add('theme-cyan');
    }
    else if (color == "t") {
      this.timberClass = true;
      className.classList.add('theme-timber');
    }
    else if (color == "bl") {
      this.blueClass = true;
      className.classList.add('theme-blue');
    }
    else if (color == "a") {
      this.amethystClass = true;
      className.classList.add('theme-amethyst');
    }
  }

  closeMenu() {
    document.getElementById('rightbar').classList.remove("open");
    document.getElementsByClassName('sticky-note')[0].classList.remove("open");
    document.getElementsByClassName('overlay')[0].classList.remove("open");
    document.getElementsByTagName('body')[0].classList.remove("offcanvas-active");
  }
}
