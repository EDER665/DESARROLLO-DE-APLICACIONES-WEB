
import { Component } from '@angular/core';


@Component ({ 
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent{ 

  mostrar = true;

  frase: any = {
    mensaje: 'El mejor jugador es Leo Messi',
    autor: 'Futbol'
  };
  personajes: string[] = ['Leonel Messi', 'Poul Pogba', ' Marcos Reus']
  i = 1; 
}