import { Injectable } from "@angular/core";
import { Empleado } from "../modelos/empleado.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EmpleadoService {
  empleado: Empleado;
  readonly rutaURL: "http://localhost:55742/api";
  lista: Empleado[];

  constructor(private http: HttpClient) {}

  agregarEmpleado(empleado: Empleado) {
    return this.http.post("http://localhost:55742/api/Empleado", empleado);
  }

  actualizarEmpleado(empleado: Empleado) {
    return this.http.put(
      "http://localhost:55742/api/Empleado/" + empleado.Id,
      empleado
    );
  }

  eliminarEmpleado(id: number) {
    return this.http.delete("http://localhost:55742/api/Empleado/" + id);
  }

  actualizarLista() {
    this.http
      .get("http://localhost:55742/api/Empleado")
      .toPromise()
      .then(
        res => (this.lista = res as Empleado[]),
        error => console.error(error)
      );
  }
}
