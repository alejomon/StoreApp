import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {
  usuario = {
    nombre: '',
    correo: '',
    edad: 0,
    password: '',
    passwordConfirmacion: '',
    cargo: 'aaa'
  };
  producto = {
    proName: '',
    descripcion: '',
    precio: '',
    imagen: ''
  }

  constructor() { }

  crearUsuario(formulario: NgForm) {
    console.log(formulario);
  }

  validarPasswordsIguales(): boolean {
    if (this.usuario.password === this.usuario.passwordConfirmacion) {
      return false;
    } else {
      return true;
    }
  }

  validarVendedor(): boolean {
    if (this.usuario.cargo === "Vendedor"){
      return true;
    } else {
    return false;
}
  }
  crearProducto(formulario: NgForm) {
    console.log(formulario);
  }
  ngOnInit() {
  }

}

