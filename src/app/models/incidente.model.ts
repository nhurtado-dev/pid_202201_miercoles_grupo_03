import { Time } from "@angular/common";
import { Causas } from "./causas.model";
import { Departamento } from "./departamento";
import { Edificio } from "./edificio.model";
import { Usuario } from "./usuario.model";

export class Incidente {

    codincidente?: number;
    hora?: Time;
    descripcion?: string;
    estado?: number;
    fechaAtencion?: Date;
    idUsuario?: Usuario;
    codedificio?: Edificio;
    coddepartamento?: Departamento;
    codcausas?: Causas;

}
