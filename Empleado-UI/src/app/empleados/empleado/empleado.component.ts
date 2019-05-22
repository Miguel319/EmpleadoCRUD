import { Component, OnInit } from "@angular/core";
import { EmpleadoService } from "src/app/compartido/servicios/empleado.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-empleado",
  templateUrl: "./empleado.component.html",
  styleUrls: ["./empleado.component.css"]
})
export class EmpleadoComponent implements OnInit {
  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit() {
    this.reiniciarFormulario();
  }

  reiniciarFormulario(form?: NgForm) {
    if (form != null) form.resetForm();

    this.empleadoService.empleado = {
      Id: null,
      EmpCodigo: "",
      Nombre: "",
      Apellido: "",
      Posicion: "",
      Telefono: ""
    };
  }

  alAceptar(form: NgForm) {
    this.agregarEmpleado(form);
  }

  agregarEmpleado(form: NgForm) {
    this.empleadoService
      .agregarEmpleado(form.value)
      .subscribe(
        res => this.reiniciarFormulario(form),
        err => console.error(err)
      );
  }
}
