import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.scss']
})
export class WorldmapComponent implements OnInit {
  zoom: number = 8;
  lat: number = 51.673858;
  long: number = 7.815982;
  constructor() { }

  ngOnInit(): void {
  }

}
