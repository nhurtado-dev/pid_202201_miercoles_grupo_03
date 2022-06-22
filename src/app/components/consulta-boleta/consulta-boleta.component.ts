import { Component, OnInit } from '@angular/core';
import { Boleta } from 'src/app/models/boleta.model';
import { BoletaService } from 'src/app/services/boleta.service';

@Component({
  selector: 'app-consulta-boleta',
  templateUrl: './consulta-boleta.component.html',
  styleUrls: ['./consulta-boleta.component.css']
})
export class ConsultaBoletaComponent implements OnInit {

 //Ng model
 nom:string="";
 dni:string="";
 boleta:Boleta[]=[];

 pageActual: number = 1;

 constructor(private boletaService:BoletaService) { }

 actualizaEstado(aux : Boleta){
  aux.estado = aux.estado == 0? 1 :0;
  this.boletaService.actualiza(aux).subscribe();
}

  consultaBoleta(){
    this.boletaService.listaBoletafiltro(this.nom, this.dni).subscribe(
          (x) => {
              this.boleta = x.lista;
              alert(x.mensaje);
          }
    );

  }
  ngOnInit(): void {
  }

}
