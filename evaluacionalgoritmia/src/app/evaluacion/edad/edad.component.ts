import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.component.html',
  styleUrls: ['./edad.component.css']
})
export class EdadComponent implements OnInit {

  anio = new FormControl();
  fecha: Date = new Date();
  anioActual: number = this.fecha.getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
