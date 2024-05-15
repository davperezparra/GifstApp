import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gisService:GifsService) {
    

  }


get tags (){

  return this.gisService.tagsHistory;
}


// TODO : HACER TAREA DE HACER CLICK EN LOS BOTONES Y REANUDAR EL SERVICIO DE MOSTRAR LOS GIFS


resetList(tag:string) {

 this.gisService.searchtag(tag);
}

}
