import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Incidente } from 'src/app/models/incidente.model';
import { IncidenteService } from 'src/app/services/incidente.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-add-incidente',
  templateUrl: './add-incidente.component.html',
  styleUrls: ['./add-incidente.component.css']
})
export class AddIncidenteComponent implements OnInit {

  usuario : Usuario[] = [];

  incidente:Incidente={
    idUsuario:{
      idUsuario: -1
    }
  }

  //las validaciones
      forms : FormGroup = this.formBuilder.group({
        codincidente : ['', [Validators.required, Validators.pattern('[a-zA-Z ]{3,30}')]],
        hora :          ['', [Validators.required]],
        descripcion :          ['', [Validators.required, Validators.pattern('[a-zA-Z ]{3,30}')]],
        estado :   ['', [Validators.min(1)]],
        fechaAtencion :          ['', [Validators.required]],
        fechaRegistro :          ['', [Validators.required]],
        idUsuario :   ['', [Validators.min(1)]],
        codpropietario :  ['', [Validators.min(1)]],
    });
  
    // para verificar que se pulsó el boton
    submitted = false;

  constructor(private incidenteService:IncidenteService,
              private formBuilder:FormBuilder,
              private   usuarioService: UsuarioService) {

              this.usuarioService.listaUsuario().subscribe(
                 (u) => this.usuario = u
      );
}


saveIncidente(){
  console.log(">>saveIncidente");
  console.log(this.incidente);
  this.incidenteService.create(this.incidente).subscribe(
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
