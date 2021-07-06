import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-centers',
  templateUrl: './our-centers.component.html',
  styleUrls: ['./our-centers.component.scss']
})
export class OurCentersComponent implements OnInit {
  zoom: number = 8;
  lat: number = 51.673858;
  long: number = 7.815982;
  constructor() { }

  ngOnInit(): void {
  }

}
