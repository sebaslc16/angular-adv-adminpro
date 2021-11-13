import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.btnClass = `btn ${this.btnClass}`;
  }

  //En caso de querer renombrar el input
  @Input ('valor') progreso: number = 50;


  @Input () btnClass: string = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  // @Input () progreso: number = 50;

  get getPorcentaje() {
    return `${this.progreso}%`;
  }

  cambiarValor(valor: number) {

    if(this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      this.progreso = 100;
      return;
    }

    if(this.progreso <= 0 && valor <= 0) {
      this.valorSalida.emit(0);
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);

  }

  onChange(nuevoValor: number) {

    if(nuevoValor>= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }

      this.valorSalida.emit(this.progreso);
  }

}