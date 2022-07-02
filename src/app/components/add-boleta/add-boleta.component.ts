import { Component, OnInit } from '@angular/core';
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
      
      this.cargarBolera();
  }

  insertado() {

    // Validar servicio
    if(this.boleta.codservicio?.codservicio == -1){
      alert("Debes seleccionar un servicio");
      return;
    }

    if(this.boleta.codpropietario?.codpropietario == -1){
      alert("Debes seleccionar un propetario");
      return;
    }

    if(this.boleta.fechavencimiento == null){
      alert("Debes ingresar una fecha de vencimiento");
      return;
    }

    if(this.boleta.costosinigv == null || this.boleta.costosinigv == 0){
      alert("Debes ingresar un costo sin IGV valido");
      return;
    }

    if(this.boleta.costototal == null || this.boleta.costototal == 0){
      alert("Debes ingresar un costo total valido");
      return;
    }

    this.boletaService.RegistraBoleta(this.boleta).subscribe( 
      
      (x) => {
        alert(x.mensaje)
        console.log(this.boleta);
        this.cargarBolera();
        this.boleta = {
          idUsuario:{
            idUsuario:1
          },
          codservicio:{
            codservicio:-1
          },
          codpropietario:{
            codpropietario:-1
          },
         };

      }
    );
    
  }
  ngOnInit(): void {
  }

  cargarBolera(){
    this.boletaService.listaBoleta().subscribe(
      (a) =>this.boletas = a
    );
  }

}
