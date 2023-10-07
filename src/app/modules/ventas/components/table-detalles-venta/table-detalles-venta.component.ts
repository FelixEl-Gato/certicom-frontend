import {Component, Input} from '@angular/core';
import {DetallesVenta} from "../../../../core/models/venta.interface";

@Component({
  selector: 'component-table-detalles-venta',
  templateUrl: './table-detalles-venta.component.html',
  styles: [
  ]
})
export class TableDetallesVentaComponent {

  @Input() public detallesVenta: DetallesVenta[] = [];
  public displayedColumns: string[] = ['nombre', 'precio', 'cantidad', 'subtotal'];
}
