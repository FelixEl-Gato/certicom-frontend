import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {VentasRoutingModule} from './ventas-routing.module';
import {MaterialModule} from "../../ui/material/material.module";

import {SearchPageComponent} from './pages/search-page/search-page.component';
import {ModalDetailsVentaComponent} from './components/modal-details-venta/modal-details-venta.component';
import {FormClienteComponent} from './components/form-cliente/form-cliente.component';
import {TableDetallesVentaComponent} from './components/table-detalles-venta/table-detalles-venta.component';


@NgModule({
  declarations: [
    SearchPageComponent,
    ModalDetailsVentaComponent,
    FormClienteComponent,
    TableDetallesVentaComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,
    MaterialModule,
    FormsModule,
  ]
})
export class VentasModule {
}
