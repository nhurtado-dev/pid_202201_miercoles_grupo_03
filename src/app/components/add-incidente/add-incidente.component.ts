import { Component, OnInit } from '@angular/core';
import { Causas } from 'src/app/models/causas.model';
import { Departamento } from 'src/app/models/departamento';
import { Edificio } from 'src/app/models/edificio.model';
import { Incidente } from 'src/app/models/incidente.model';
import { Usuario } from 'src/app/models/usuario.model';
import { CausasService } from 'src/app/services/causas.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { EdificioService } from 'src/app/services/edificio.service';
import { IncidenteService } from 'src/app/services/incidente.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-incidente',
  templateUrl: './add-incidente.component.html',
  styleUrls: ['./add-incidente.component.css']
})
export class AddIncidenteComponent implements OnInit {


  // Combo Box 
  usuarios: Usuario[] = [];
  edificios: Edificio[] = [];
  departamentos: Departamento[] = [];
  causas: Causas[] = [];

  // Grilla
  incidentes: Incidente[] = [];

  incidente: Incidente = {
    codincidente: 0,
    hora: undefined,
    descripcion: "",
    idUsuario: {
      idUsuario: 2
    },
    codedificio:{
      codedificio: -1
    },
    coddepartamento: {
      coddepartamento: -1
    },
    codcausas:{
      codcausas: -1
    }
  };

  // PAGINACION pageActual
  pageActual: number = 1;

  constructor(private usuarioService: UsuarioService,
    private edificiosService: EdificioService,
    private departamentoService: DepartamentoService,
    private causasService: CausasService,
    private incidenteService: IncidenteService) {


    this.usuarioService.listaUsuario().subscribe(
      (u) => this.usuarios = u
    );

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

  listaIncidente(){
    this.incidenteService.listaIncidente().subscribe(
      (i) => this.incidentes = i
    );
  }

  registrar(){
    this.incidente.estado = 1
    this.incidenteService.registrar(this.incidente).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje)
        this.listaIncidente();
      },
      error => {
        console.error(error);
      },
    );
  }




  ngOnInit(): void {
    this.listaIncidente();
  }

}
