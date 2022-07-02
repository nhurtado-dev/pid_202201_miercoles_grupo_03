import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Boleta } from 'src/app/models/boleta.model';
import { Pago } from 'src/app/models/pago.model';
import { Usuario } from 'src/app/models/usuario.model';
import { BoletaService } from 'src/app/services/boleta.service';
import { PagoService } from 'src/app/services/pago.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-pago',
  templateUrl: './add-pago.component.html',
  styleUrls: ['./add-pago.component.css']
})
export class AddPagoComponent implements OnInit {
   
  usuario:Usuario[]=[];
  boleta:Boleta[]=[];
  pagos:Pago[]=[];

  pago:Pago={
    idUsuario:{
      idUsuario:1
    },
    codboleta:{
      codboleta:-1
    }
    ,
    codpago: -1
  }


  pageActual: number = 1;

  constructor(private boletaService:BoletaService,
              private pagoService:PagoService,
              private usuarioService:UsuarioService) { 
                this.usuarioService.listaUsuario().subscribe(
                  (u) => this.usuario = u
                );
                this.cargarPagos();

                this.boletaService.listaBoleta().subscribe(
                  (a) =>this.boleta = a
                );
  }
  insertado() {

    if(this.pago.codboleta?.codboleta == -1){
      alert("Debes seleccionar una boleta a pagar");
      return;
    }

    if(this.pago.tipopago == -1 || this.pago.tipopago == undefined ){
      alert("Debes seleccionar un pago");
      return;
    }

    this.pagoService.RegistraPago(this.pago).subscribe( 
      
      (x) => {
        alert(x.mensaje)
        console.log(this.boleta);
        this.pago ={
          idUsuario:{
            idUsuario:1
          },
          codboleta:{
            codboleta:-1
          }
        };
        this.cargarPagos();
      }
    );
    
  }




  ngOnInit(): void {
  }

  cargarPagos(){
    this.pagoService.listaPago().subscribe(
      (p) =>  this.pagos = p
    );
  }

}
