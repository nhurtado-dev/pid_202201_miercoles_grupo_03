import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Propietarios } from 'src/app/models/propietarios.model';
import { Usuario } from 'src/app/models/usuario.model';
import { Visitante } from 'src/app/models/visitante.model';
import { PropietarioService } from 'src/app/services/propietario.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VisitanteService } from 'src/app/services/visitante.service';

@Component({
  selector: 'app-add-visitante',
  templateUrl: './add-visitante.component.html',
  styleUrls: ['./add-visitante.component.css']
})
export class AddVisitanteComponent implements OnInit {

  propietarios : Propietarios[] = [];
  usuarios : Usuario[] = [];
  
  visitante:Visitante={

    idUsuario:{
      idUsuario: -1
    },
    codpropietario:{
      codpropietario: -1
    }

  }

    //las validaciones
    forms : FormGroup = this.formBuilder.group({
      codvisitantes : ['', [Validators.required, Validators.pattern('[a-zA-Z ]{3,30}')]],
      dni :          ['', [Validators.required, Validators.pattern('[0-9]{1,3}')]],
      nombrevisitante :          ['', [Validators.required, Validators.pattern('[a-zA-Z ]{3,30}')]],
      idUsuario :   ['', [Validators.min(1)]],
      codpropietario :  ['', [Validators.min(1)]],
  });

  // para verificar que se pulsó el boton
  submitted = false;

  constructor(private usuarioService:UsuarioService,
              private propietarioService:PropietarioService,
              private formBuilder:FormBuilder,
              private visitanteService:VisitanteService) {

                this.usuarioService.listaUsuario().subscribe(
                  (u) => this.usuarios = u
                );

                this.propietarioService.listaPropietario().subscribe(
                  (p) => this.propietarios = p
                );
  }

  saveVisitante(){
    console.log(">>saveVisitante");
    console.log(this.visitante);
    this.visitanteService.create(this.visitante).subscribe(
      response =>{
        console.log(response.mensaje);
        alert(response.mensaje)
      },
      error =>{
        console.error(error);    
      },
    );
  }
  
  ngOnInit(): void {
  }

}
