import {Component, Inject, OnInit} from '@angular/core';
import {Venta} from "../../../../core/models/venta.interface";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {VentasService} from "../../../../core/services/ventas.service";

@Component({
  selector: 'component-modal-details-venta',
  templateUrl: './modal-details-venta.component.html',
  styles: [
  ]
})
export class ModalDetailsVentaComponent implements OnInit{

  public venta!: Venta;

  constructor(
    private ventaServices : VentasService,
    public dialogRef: MatDialogRef<ModalDetailsVentaComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number
  ) {
  }

  ngOnInit(): void {
    this.ventaServices.getVentaById(this.id).subscribe(venta => this.venta = venta);
  }

  public close(): void {
    this.dialogRef.close()
  }

  public getTotal(): number {
    return this.venta.detallesVenta
      .map(ventaDetail => ventaDetail.cantidad * ventaDetail.producto.precio)
      .reduce((a, b) => a + b) || 0;
  }
}
