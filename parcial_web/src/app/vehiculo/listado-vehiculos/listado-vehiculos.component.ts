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
  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos(): void{
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      console.log(vehiculos);
    })
  }

  ngOnInit() {
    this.getVehiculos();
  }

}
