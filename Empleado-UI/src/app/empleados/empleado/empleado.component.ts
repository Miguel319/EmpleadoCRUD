import { Component, OnInit } from "@angular/core";
import { EmpleadoService } from "src/app/compartido/servicios/empleado.service";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-empleado",
  templateUrl: "./empleado.component.html",
  styleUrls: ["./empleado.component.css"]
})
export class EmpleadoComponent implements OnInit {
  constructor(
    private empleadoService: EmpleadoService,
    private toastr: ToastrService
  ) {}

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
    if (form.value.Id == null) {
      this.agregarEmpleado(form);
    } else {
      this.actualizarEmpleado(form);
    }
  }

  agregarEmpleado(form: NgForm) {
    this.empleadoService.agregarEmpleado(form.value).subscribe(
      res => {
        this.toastr.success(
          "¡Empleado agregado satisfactoriamente!",
          "Inserción"
        );
        this.reiniciarFormulario(form);
        this.empleadoService.actualizarLista();
      },
      err => console.error(err)
    );
  }

  actualizarEmpleado(form: NgForm) {
    this.empleadoService.actualizarEmpleado(form.value).subscribe(
      res => {
        this.toastr.success(
          "¡Empleado actualizado satisfactoriamente!",
          "Actualización"
        );
        this.empleadoService.actualizarLista();
      },
      err => console.error(err)
    );
  }
}
