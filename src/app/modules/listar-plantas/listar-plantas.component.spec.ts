import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {faker} from "@faker-js/faker";

import { ListarPlantasComponent } from './listar-plantas.component';
import { Planta } from './model/planta';
import { PlantasService } from './service/plantas.service';
import { HttpClientModule } from '@angular/common/http';

describe('ListarPlantasComponent', () => {
  let component: ListarPlantasComponent;
  let fixture: ComponentFixture<ListarPlantasComponent>;
  let debug: DebugElement;
  let testPlantas: Planta[] = [

    new Planta(
      faker.datatype.number(),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.datatype.number(),
      faker.lorem.word(10),
      faker.lorem.word(50),
    ),
    new Planta(
      faker.datatype.number(),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.datatype.number(),
      faker.lorem.word(10),
      faker.lorem.word(50),
    ),
    new Planta(
      faker.datatype.number(),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.datatype.number(),
      faker.lorem.word(10),
      faker.lorem.word(50),
    )
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListarPlantasComponent ],
      providers: [ PlantasService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    ListarPlantasComponent.prototype.ngOnInit = () => {} ;
    fixture = TestBed.createComponent(ListarPlantasComponent);
    component = fixture.componentInstance;
    component.plantas = testPlantas;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create plantas', () => {
    expect(component.plantas).toEqual(testPlantas);
    expect(component.plantas.length).toEqual(3);
  })

  it('should test the table ', (done) => {

    fixture.detectChanges();
    fixture.whenStable().then(
      () => {
        fixture.detectChanges();

        let tableRows = fixture.nativeElement.querySelectorAll('tr');
        expect(tableRows.length).toEqual(4);

        let headerRow = tableRows[0];
        expect(headerRow.cells[0].innerHTML).toEqual('#');
        expect(headerRow.cells[1].innerHTML).toEqual('Nombre común');
        expect(headerRow.cells[2].innerHTML).toEqual('Tipo');
        expect(headerRow.cells[3].innerHTML).toEqual('Clima');

        let row1 = tableRows[1];
        expect(row1.cells[0].innerHTML).toEqual(testPlantas[0].id.toString());
        expect(row1.cells[1].innerHTML).toEqual(testPlantas[0].nombre_comun);
        expect(row1.cells[2].innerHTML).toEqual(testPlantas[0].tipo);
        expect(row1.cells[3].innerHTML).toEqual(testPlantas[0].clima);

        let row2 = tableRows[2];
        expect(row2.cells[0].innerHTML).toEqual(testPlantas[1].id.toString());
        expect(row2.cells[1].innerHTML).toEqual(testPlantas[1].nombre_comun);
        expect(row2.cells[2].innerHTML).toEqual(testPlantas[1].tipo);
        expect(row2.cells[3].innerHTML).toEqual(testPlantas[1].clima);

        let row3 = tableRows[3];
        expect(row3.cells[0].innerHTML).toEqual(testPlantas[2].id.toString());
        expect(row3.cells[1].innerHTML).toEqual(testPlantas[2].nombre_comun);
        expect(row3.cells[2].innerHTML).toEqual(testPlantas[2].tipo);
        expect(row3.cells[3].innerHTML).toEqual(testPlantas[2].clima);

        done();
      }
    );

  });
});
