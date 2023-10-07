import {Cliente} from "./cliente.interface";

export interface Venta {
  id: number;
  cliente: Cliente;
  fecha: Date;
  detallesVenta: DetallesVenta[];
}

export interface DetallesVenta {
  id: number;
  producto: Producto;
  cantidad: number;
}

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
}
