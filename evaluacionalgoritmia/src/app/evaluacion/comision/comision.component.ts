import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-comision',
  templateUrl: './comision.component.html',
  styleUrls: ['./comision.component.css']
})
export class ComisionComponent implements OnInit {

  constructor() { }
  comision : number = 0.1;
  salario = new FormControl();
  venta = new FormControl();
  ventas: number[] =[];
  totalventa: number = 0;


  ngOnInit(): void {
  }
  agregarventa(){
    this.ventas.push(this.venta.value);
    this.totalventa = this.totalventa+this.venta.value;
    this.venta.setValue(null);
  }
  borrarVentas(){
    this.ventas = [];
    this.totalventa = 0;

  }

}
