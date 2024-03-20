import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf, NgFor, NgStyle, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje = "";
  registrado = false;
  nombre:string = "";
  apellido:string = "";
  cargo:string = "";
  entradas: {titulo:string}[];

  registrarUsuario(){
    this.registrado = true;
    this.mensaje = "Usuario registrado con éxito";
  }

  constructor(){
    this.entradas = [
      {titulo:"Python cada día más presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"JavaScript cada vez más funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Dónde quedó Pascal?"}
    ]
  }
}
