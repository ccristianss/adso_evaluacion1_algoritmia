import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';


//Components
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//Evaluacion
import { InversionComponent } from './evaluacion/inversion/inversion.component';
import { ComisionComponent } from './evaluacion/comision/comision.component';
import { DescuentoComponent } from './evaluacion/descuento/descuento.component';
import { EstudiantesComponent } from './evaluacion/estudiantes/estudiantes.component';
import { EdadComponent } from './evaluacion/edad/edad.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    NavbarComponent,
    InversionComponent,
    ComisionComponent,
    DescuentoComponent,
    EstudiantesComponent,
    EdadComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,  
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
