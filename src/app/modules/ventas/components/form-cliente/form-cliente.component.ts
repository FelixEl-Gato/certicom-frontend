import {Component, Input} from '@angular/core';
import {Cliente} from "../../../../core/models/cliente.interface";

@Component({
  selector: 'component-form-customer',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent {
  @Input() public cliente: Cliente = {
    id: 0,
    nombres: '',
    apellidos: '',
    dni: '',
    telefono: ''
  };
}
