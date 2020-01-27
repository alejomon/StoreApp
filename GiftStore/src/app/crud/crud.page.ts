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
    passwordConfirmacion: ''
  };

  constructor() { }

  crearUsuario(formulario: NgForm) {
    console.log(formulario);
  }
  ngOnInit() {
  }

}
