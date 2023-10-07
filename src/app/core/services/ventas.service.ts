import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../../environments/environments";

import {Page} from "../models/page.interface";
import {Venta} from "../models/venta.interface";

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private endPoint: string = `${environment.baseUrl}/api/v1/ventas`;

  constructor(private httpClient: HttpClient) {
  };

  getVentas(page: number = 1, size: number = 10): Observable<Page<Venta>> {
    return this.httpClient.get<Page<Venta>>(this.endPoint, {
      params: {
        page: page.toString(),
        size: size.toString()
      }
    });
  }

  getVentaById(id: number): Observable<Venta> {
    return this.httpClient.get<Venta>(`${this.endPoint}/${id}`)
  }

  getVentasByRangeDate(dateStart: Date, dateEnd: Date, page: number = 1, size: number = 10): Observable<Page<Venta>> {
    return this.httpClient.get<Page<Venta>>(this.endPoint, {
      params: {
        page: page.toString(),
        size: size.toString(),
        dateStart: dateStart.toISOString().substring(0, 10),
        dateEnd: dateEnd.toISOString().substring(0, 10)
      }
    });
  }
}
