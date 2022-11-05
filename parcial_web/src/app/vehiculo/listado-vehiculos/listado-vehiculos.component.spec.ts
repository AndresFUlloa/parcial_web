/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ListadoVehiculosComponent } from './listado-vehiculos.component';
import { HttpClientModule } from '@angular/common/http';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

describe('ListadoVehiculosComponent', () => {
  let component: ListadoVehiculosComponent;
  let fixture: ComponentFixture<ListadoVehiculosComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListadoVehiculosComponent ],
      providers: [VehiculoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoVehiculosComponent);
    component = fixture.componentInstance;
    const marcas = ['Renault', 'Mazda', 'Chevrolet', 'Mitsubishi', 'Ford', 'KIA', 'Toyota', 'BWM']
    for(var i=0; i<3; i++){
      const vehiculo = new Vehiculo(
        i,
        marcas[Math.floor(Math.random()*marcas.length)],
        faker.datatype.string(5),
        faker.datatype.string(5),
        faker.datatype.number({min:1990, max: 2022}),
        faker.datatype.number({min:0, max:200000}),
        faker.datatype.string(5),
        faker.internet.url()
      );
      component.vehiculos.push(vehiculo);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })

  it('should have 1 tr element in thead', () => {
    expect(debug.queryAll(By.css('thead > tr'))).toHaveSize(1);
  });

  it('should have 3 tr element in tbody', () => {
    expect(debug.queryAll(By.css('tbody > tr'))).toHaveSize(3);
  });

  it('should have td tags with the vehiculo.id', () =>{
    debug.queryAll(By.css('.td-vehiculo-id')).forEach((td, i) => {
      expect(td.nativeElement.textContent).toContain(component.vehiculos[i].id)
    });
  });

  it('should have td tags with the vehiculo.marca', () =>{
    debug.queryAll(By.css('.td-vehiculo-marca')).forEach((td, i) => {
      expect(td.nativeElement.textContent).toContain(component.vehiculos[i].marca)
    });
  });

  it('should have td tags with the vehiculo.linea', () =>{
    debug.queryAll(By.css('.td-vehiculo-linea')).forEach((td, i) => {
      expect(td.nativeElement.textContent).toContain(component.vehiculos[i].linea)
    });
  });

  it('should have td tags with the vehiculo.modelo', () =>{
    debug.queryAll(By.css('.td-vehiculo-modelo')).forEach((td, i) => {
      expect(td.nativeElement.textContent).toContain(component.vehiculos[i].modelo)
    });
  });

});
