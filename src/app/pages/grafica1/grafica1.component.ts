import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public labels1: string[] = ['Pan', 'Refresco', 'Carne'];

  public data1 = [
    [450, 550, 200]
  ];

}
