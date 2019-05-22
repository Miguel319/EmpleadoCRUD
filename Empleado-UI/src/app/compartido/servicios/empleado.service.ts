import { Injectable } from "@angular/core";
import { Empleado } from "../modelos/empleado.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EmpleadoService {
  empleado: Empleado;
  readonly rutaURL: "http://localhost:55742/api";

  constructor(private http: HttpClient) {}

  agregarEmpleado(empleado: Empleado) {
    return this.http.post(
      'http://localhost:55742/api/Empleado',
      empleado
    );
  }
}
