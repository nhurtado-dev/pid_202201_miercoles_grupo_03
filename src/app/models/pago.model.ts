import { Boleta } from "./boleta.model";
import { Usuario } from "./usuario.model";

export class Pago {
    codpago?:number;
    tipopago?:number;
    idUsuario?:Usuario;
    fechaemision?:Date;
    codboleta?:Boleta;
}
