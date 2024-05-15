import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    template: `

<h5>
  Buscar
</h5>
<input type="text" class="form-control" placeholder="Buscar Gifs.."
 (keyup.enter)="searchTag()"
 #txtTagInput>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!:ElementRef<HTMLInputElement>;

  constructor(private gifsServei:GifsService ){

    console.log('Corriendo Search box');
  }
  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    console.log(this.gifsServei.tagsHistory);
    this.gifsServei.searchtag(newTag);
    this.tagInput.nativeElement.value='';
    // console.log(this.);

  }
}
