import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDateRangePicker} from "@angular/material/datepicker";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {DetallesVenta, Venta} from "../../../../core/models/venta.interface";
import {MatTableDataSource} from "@angular/material/table";
import {VentasService} from "../../../../core/services/ventas.service";
import {MatSort} from "@angular/material/sort";
import {ModalDetailsVentaComponent} from "../../components/modal-details-venta/modal-details-venta.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'ventas-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  public date = {
    dateStart: '',
    dateEnd: ''
  }

  @ViewChild('picker') picker!: MatDateRangePicker<Date>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public dataSource = new MatTableDataSource<Venta>([]);

  displayedColumns: string[] = ['nombres', 'fecha', 'total', 'detalles'];
  public pageSizeOptions: number[] = [5, 10, 25, 100];
  public length!: number;
  public totalPages!: number;

  constructor(
    private ventasService: VentasService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.loadVentaData(0, 5);
  }

  private loadVentaData(pageIndex: number, pageSize: number): void {
    this.ventasService.getVentas(pageIndex, pageSize).subscribe(page => {
      this.dataSource.paginator = this.paginator;
      this.dataSource = new MatTableDataSource(page.content);
      this.length = page.totalElements;
      this.totalPages = page.totalPages;
    });
  }

  public showMore(event: PageEvent): void {
    let {pageIndex, pageSize} = event;

    if (this.date.dateStart && this.date.dateEnd) {
      this.ventasService
        .getVentasByRangeDate(
          new Date(this.date.dateStart),
          new Date(this.date.dateEnd),
          pageIndex, pageSize
        )
        .subscribe(page => {
          this.dataSource = new MatTableDataSource(page.content);
          this.length = page.totalElements;
        });
    } else {
      this.ventasService.getVentas(pageIndex, pageSize).subscribe(page => {
        this.dataSource.data = page.content;
        this.length = page.totalElements;
      });
    }
  }

  public getTotal(detallesVenta: DetallesVenta[]): number {
    return detallesVenta.reduce((acc, item) => acc + item.cantidad * item.producto.precio, 0);
  }

  public search(): void {
    this.paginator.pageIndex = 0;

    console.log(this.date.dateStart, this.date.dateEnd);
    if (this.date.dateStart == null && this.date.dateEnd == null) this.loadVentaData(0, 5);

    this.ventasService.getVentasByRangeDate(
      new Date(this.date.dateStart),
      new Date(this.date.dateEnd),
      this.paginator.pageIndex, this.paginator.pageSize
    ).subscribe(page => {
      this.dataSource = new MatTableDataSource(page.content);
      this.length = page.totalElements;
    });
  }

  public openDialog(id: number): void {
    const dialogRef = this.dialog.open(ModalDetailsVentaComponent, {
      width: '800px',
      data: id
    });
  }
}
