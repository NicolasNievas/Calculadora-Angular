import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  n1: number = 0;
  n2: number = 0;
  resultado: number = 0;

  acLimpiar() {
    this.n1 = 0;
    this.n2 = 0;
    this.resultado = 0;
  }

  realizarOperacion(tipoOperacion: string) {

    switch (tipoOperacion) {
      case 'suma':
        this.resultado = this.n1 + this.n2;
        break;
      case 'resta':
        this.resultado = this.n1 - this.n2;
        break;
      case 'multiplicacion':
        this.resultado = this.n1 * this.n2;
        break;
      case 'division':
        if (this.n2 !== 0) {
          this.resultado = this.n1 / this.n2;
        } else {
          // Manejar división por cero
          this.resultado = NaN;
        }
        break;
      case 'potencia':
        this.resultado = Math.pow(this.n1, this.n2);
        break;
      case 'raiz':
        this.resultado = Math.pow(this.n1, 1 / this.n2);
        break;
      default:
        this.resultado = NaN; // Manejar operación no válida
    }
  }
  
}
