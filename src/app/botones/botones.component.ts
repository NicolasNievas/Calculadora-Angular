import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {
  @Output() operacionSeleccionada = new EventEmitter<string>();
  @Output() limpiarResultadoEvent = new EventEmitter<void>();

  emitirOperacion(operacion: string) {
    this.operacionSeleccionada.emit(operacion);
  }

  limpiar() {
    this.limpiarResultadoEvent.emit();
  }
}
