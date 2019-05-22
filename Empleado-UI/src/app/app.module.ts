import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmpleadosComponent } from "./empleados/empleados.component";
import { EmpleadoComponent } from "./empleados/empleado/empleado.component";
import { EmpleadoListaComponent } from "./empleados/empleado-lista/empleado-lista.component";
import { EmpleadoService } from "./compartido/servicios/empleado.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    EmpleadoListaComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
