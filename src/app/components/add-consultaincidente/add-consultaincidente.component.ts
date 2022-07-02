import { Component, OnInit } from '@angular/core';
import { Causas } from 'src/app/models/causas.model';
import { Departamento } from 'src/app/models/departamento';
import { Edificio } from 'src/app/models/edificio.model';
import { Incidente } from 'src/app/models/incidente.model';
import { CausasService } from 'src/app/services/causas.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { EdificioService } from 'src/app/services/edificio.service';
import { IncidenteService } from 'src/app/services/incidente.service';

@Component({
  selector: 'app-add-consultaincidente',
  templateUrl: './add-consultaincidente.component.html',
  styleUrls: ['./add-consultaincidente.component.css']
})
export class AddConsultaincidenteComponent implements OnInit {

  // Variables NgModel
  selEdi: number = -1;
  selDepa: number = -1;
  selEsta: number = -1;
  selCaus: number = -1;

  // Combo Box 
  edificios: Edificio[] = [];
  departamentos: Departamento[] = [];
  causas: Causas[] = [];

  // Grilla Consulta Incidente
  incidentes: Incidente[] = [];

  // PAGINACION pageActual
  pageActual: number = 1;

  constructor(private edificiosService: EdificioService,
    private departamentoService: DepartamentoService,
    private causasService: CausasService,
    private incidenteService: IncidenteService) {

    this.edificiosService.listaEdificio().subscribe(
      (e) => this.edificios = e
    );

    this.departamentoService.listaDepartamento().subscribe(
      (d) => this.departamentos = d
    );

    this.causasService.listaCausas().subscribe(
      (c) => this.causas = c
    )
  }

  listaIncidenteConFiltro() {
    this.incidenteService.listaIncidenteConFiltro(this.selEdi, this.selDepa, this.selEsta, this.selCaus).subscribe(
      (i) => {
        this.incidentes = i.lista;
        alert(i.mensaje);
      }
    );
  }

  actualizarEstado(aux: Incidente) {
    aux.estado = aux.estado == 0 ? 1 : 0;
    this.incidenteService.actualizar(aux).subscribe();
    alert("Se actualizo el Incidente de Codigo "+ aux.codincidente+" correctamente.");
  }

  ngOnInit(): void {
  }

}
