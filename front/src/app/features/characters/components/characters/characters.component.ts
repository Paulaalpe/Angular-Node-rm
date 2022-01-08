import { Component, OnInit } from '@angular/core';
import { Icharacters } from 'src/app/core/models/icharacters';
import { HttpRequestService } from '../../services/http-request.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  private URL: string = 'https://rickandmortyapi.com/api/character';
  public dataInfo: Icharacters[] = [];

  constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {
    this.RecoverCharacterData();
  }

  //esto siempre es igual:ejecuto una función (porque es asíncrono) la función se conecta al servicio, llama al método que hemos creado, me subscribo y me devuelve la info, que asignamos a una variable
  public RecoverCharacterData() {
    this.httpRequestService.getData(this.URL).subscribe(
      (data:any) => {
        const results : Icharacters[] = data.results;
        const formattedResults = results.map(({ name, image, status, species, gender }) =>({
          name, 
          image,
          status,
          species,
          gender
        }));
     this.dataInfo = formattedResults;

    })
  }


}
