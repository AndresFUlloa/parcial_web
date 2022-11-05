import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoVehiculosComponent } from './listado-vehiculos/listado-vehiculos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListadoVehiculosComponent],
  exports: [ListadoVehiculosComponent]
})
export class VehiculoModule { }
