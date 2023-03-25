import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Components
import { MainComponent } from './components/main/main.component';

//Evaluacion
import { InversionComponent } from './evaluacion/inversion/inversion.component';
import { ComisionComponent } from './evaluacion/comision/comision.component';
import { DescuentoComponent } from './evaluacion/descuento/descuento.component';
import { EstudiantesComponent } from './evaluacion/estudiantes/estudiantes.component';
import { EdadComponent } from './evaluacion/edad/edad.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'inversion', component: InversionComponent },
  {path: 'comision', component: ComisionComponent },
  {path: 'descuento', component: DescuentoComponent },
  {path: 'estudiantes', component: EstudiantesComponent },
  {path: 'edad', component: EdadComponent },
  {path: 'main', component: MainComponent },
  {path: '**', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
