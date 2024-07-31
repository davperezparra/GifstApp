import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interface/gifs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList : Gif[]=[];

  private _tagshistory:string[] =[];
  private apiKey :string = 'JIDrwZKBdXFQDrR22vQZGVZsF9giYX0l';
  private serviceUrl : string ='https://api.giphy.com/v1/gifs';


  constructor(private http:HttpClient) {

    this.loadLocalStorage ();
    console.log('Corriendo Servicio')

   }

  get tagsHistory() {
    return [...this._tagshistory];
  }

  private organizeHistory(tag:string) {
    tag = tag.toLowerCase();


    if (this._tagshistory.includes(tag)) {
      this._tagshistory = this._tagshistory.filter((oltag) => oltag !=tag);

    }

    this._tagshistory.unshift(tag);
    this._tagshistory= this._tagshistory.splice(0,10);
    this.saveLocalStorage();

  }

  private saveLocalStorage():void {
    localStorage.setItem('history',JSON.stringify(this._tagshistory));
  }

  private loadLocalStorage ():void {
    if (!localStorage.getItem('history')) return;
    console.log('servicio....')
    this._tagshistory = JSON.parse(localStorage.getItem('history')!);
    console.log(this._tagshistory[0]);
    this.searchtag(this._tagshistory[0]);
  }

  searchtag(tag:string):void {
    if(tag.length===0) return;

    this.organizeHistory(tag);
    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','10')
    .set('q',tag)
    

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
    .subscribe(resp => {
      this.gifList= resp.data;
      console.log(this.gifList);
    })

    console.log(this.tagsHistory);
  }

}
