import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/compartido/servicios/empleado.service';
import { Empleado } from 'src/app/compartido/modelos/empleado.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-empleado-lista",
  templateUrl: "./empleado-lista.component.html",
  styleUrls: ["./empleado-lista.component.css"]
})
export class EmpleadoListaComponent implements OnInit {
  constructor(
    private empleadoServicio: EmpleadoService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.empleadoServicio.actualizarLista();
  }

  actualizarFormulario(emp: Empleado) {
    this.empleadoServicio.empleado = Object.assign({}, emp);
  }

  alEliminar(id: number) {
    if (confirm('¿Seguro que desea eliminar a este empleado?')) {
      this.empleadoServicio.eliminarEmpleado(id).subscribe(res => {
        this.empleadoServicio.actualizarLista();
        this.toastr.info(
          "¡Empleado eliminado satisfactoriamente!",
          "Eliminación"
        );
      });
    }
  }
}
