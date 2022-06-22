import { Departamento } from "./departamento";
import { Propietarios } from "./propietarios.model";
import { Servicio } from "./servicio.models";
import { Usuario } from "./usuario.model";

export class Boleta {
   codboleta?:number;
   fechaemision?:Date;
   fechavencimiento?:Date;
   costosinigv?:number;
   costototal?:number;
   estado?:number;
   idUsuario?:Usuario;
   codpropietario?:Propietarios;
   codservicio?:Servicio;
}
