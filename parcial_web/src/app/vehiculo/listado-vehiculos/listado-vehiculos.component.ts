import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-listado-vehiculos',
  templateUrl: './listado-vehiculos.component.html',
  styleUrls: ['./listado-vehiculos.component.css']
})
export class ListadoVehiculosComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  totales: Array<any> = [];
  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos(): void{
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      let marcas = new Set(this.vehiculos.map(m => m.marca));
      marcas.forEach((marca) => {
          const data = {marca: marca, total:this.vehiculos.filter(v => v.marca == marca).length}
          this.totales.push(data);
      });
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }

}
