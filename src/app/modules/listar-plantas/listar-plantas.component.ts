import { Component, OnInit } from '@angular/core';
import { Planta } from './model/planta';
import { PlantasService } from './service/plantas.service';

@Component({
  selector: 'app-listar-plantas',
  templateUrl: './listar-plantas.component.html',
  styleUrls: ['./listar-plantas.component.css']
})
export class ListarPlantasComponent implements OnInit {

  plantas: Array<Planta> = [];
  interiorCount: number = 0;
  exteriorCount: number = 0;
  constructor(private plantasservice: PlantasService) { }

  ContarPlantas(plantas: Array<Planta>): void{
    plantas.forEach((planta) =>{
      if(planta.tipo.toUpperCase().indexOf("INTERIOR") > -1){
        this.interiorCount++;
      }else if(planta.tipo.toUpperCase().indexOf("EXTERIOR") > -1){
        this.exteriorCount++;
      }
    })
  }

  getPlantas(): void {
    this.plantasservice.getPlantasDisponibles().subscribe((plantas) => {
      this.plantas = plantas;
      this.ContarPlantas(plantas);
    });
  }

  ngOnInit(): void {
    this.getPlantas();
  }

}
