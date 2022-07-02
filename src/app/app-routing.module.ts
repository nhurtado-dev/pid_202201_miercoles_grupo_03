import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartamentoComponent } from './components/add-departamento/add-departamento.component';
import { AddIncidenteComponent } from './components/add-incidente/add-incidente.component';
import { AddMascotaComponent } from './components/add-mascota/add-mascota.component';
import { AddPropietarioComponent } from './components/add-propietario/add-propietario.component';
import { AddServiciosComponent } from './components/add-servicios/add-servicios.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { AddVisitanteComponent } from './components/add-visitante/add-visitante.component';
import { AddVisitaComponent } from './components/add-visita/add-visita.component';
import { LoginComponent } from './auth/login.component';
import { MenuComponent } from './menu/menu.component';
import { AddBoletaComponent } from './components/add-boleta/add-boleta.component';
import { ConsultaBoletaComponent } from './components/consulta-boleta/consulta-boleta.component';
import { AddPagoComponent } from './components/add-pago/add-pago.component';
import { AddConsultaincidenteComponent } from './components/add-consultaincidente/add-consultaincidente.component';


const routes: Routes = [
  { path: '', component: MenuComponent },
  {path:"appLogin",component:LoginComponent},
  {path:"addUsuario",component:AddUsuarioComponent },
  {path:"addPropietario",component:AddPropietarioComponent},
  {path:"addIncidente",component:AddIncidenteComponent},
  {path:"addServicio",component:AddServiciosComponent},
  {path:"addVisitante",component:AddVisitanteComponent},
  {path:"addBoleta",component:AddBoletaComponent},
  {path:"ConsultaBoleta",component:ConsultaBoletaComponent},
  {path:"addPago",component:AddPagoComponent},
  {path:"addDepartamento",component:AddDepartamentoComponent},
  {path:"addMascota",component:AddMascotaComponent},
  {path:"addVisita",component:AddVisitaComponent},
  {path:"addConsultarIncidente",component:AddConsultaincidenteComponent},
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
