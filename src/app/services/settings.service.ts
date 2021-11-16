import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme: any = document.querySelector('#theme');

  public themes!: NodeListOf<Element>;

  constructor() {
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';

    this.linkTheme.setAttribute('href', url);
   }

   //funcion que toma el nombre del tema que se quiere y lo aplica a la aplicacion
  changeTheme(theme: string) {
    //se crea la url con el tema que se selecciona
    const url = `./assets/css/colors/${theme}.css`;

    //y se reemplaza el href con el url del tema que se selecciona
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();

  }

  //funcion para marcar como selecciona el tema actual
  checkCurrentTheme() {

    this.themes.forEach((element) => {

      //se remueve la clase working a cada tema por si la tiene
      //esta clase es la que marca como seleccionado el tema
      element.classList.remove('working');

      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      //se compara el tema actual activo con el elemento(tema)
      //si es igual se añade la clase working
      if(btnThemeUrl === currentTheme) {
        element.classList.add('working');
      }

    });

  }

}