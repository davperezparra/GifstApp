import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gift-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor( private gifsServie : GifsService){

    console.log('Corriendo HomePage')
  }

  get gifs()  {

   return  this.gifsServie.gifList;
    

  }

}
