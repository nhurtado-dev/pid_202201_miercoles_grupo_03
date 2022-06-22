import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Boleta } from 'src/app/models/boleta.model';
import { Propietarios } from 'src/app/models/propietarios.model';
import { Servicio } from 'src/app/models/servicio.models';
import { Usuario } from 'src/app/models/usuario.model';
import { BoletaService } from 'src/app/services/boleta.service';
import { PropietarioService } from 'src/app/services/propietario.service';
import { ServicioService } from 'src/app/services/servicio.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-boleta',
  templateUrl: './add-boleta.component.html',
  styleUrls: ['./add-boleta.component.css']
})
export class AddBoletaComponent implements OnInit {

  //Variables globales para los combobox
  servicio:Servicio[] =[];
  usuario:Usuario[]=[];
  propietarios:Propietarios[]=[];
  boletas:Boleta[]=[];

  // PAGINACION pageActual
  pageActual: number = 1;
  
   //Variables seleccionadas
   boleta:Boleta ={
    idUsuario:{
      idUsuario:1
    },
    codservicio:{
      codservicio:-1
    },
    codpropietario:{
      codpropietario:-1
    },
   }
/*//Las validaciones
  submitted = false;
  formsRegistra= new FormGroup({
    validigv: new FormControl('', [Validators.required,Validators.pattern('')]),
    validtotal: new FormControl('', [Validators.required,Validators.pattern('')]),
    validfecven: new FormControl('', [Validators.required,Validators.pattern('')]),
    validapropietario: new FormControl('', [Validators.min(1)]),
    validserv: new FormControl('', [Validators.min(1)])
  });
 
*/
  constructor(private boletaService:BoletaService,
              private servicioService:ServicioService,
              private usuarioService:UsuarioService,
              private propietarioService:PropietarioService) { 
      this.servicioService.listaServicio().subscribe(
        (s) =>this.servicio = s
      );
      this.usuarioService.listaUsuario().subscribe(
        (u) => this.usuario = u
      );
      this.propietarioService.listaPropietario().subscribe(
        (p) => this.propietarios = p
      );
      this.boletaService.listaBoleta().subscribe(
        (a) =>this.boletas = a
      );

  }

  insertado() {
    console.log(this.boleta);
  /*  this.submitted = true;
    if (this.formsRegistra.invalid){
      return;
     }
*/
    this.boletaService.RegistraBoleta(this.boleta).subscribe( 
      
      (x) => {
        alert(x.mensaje)
      }
    );
    
  }
  ngOnInit(): void {
  }

}
