import { EpisodioService } from './../../services/episodio.service';
import { Iepisodio } from './../../models/iepisodio';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss']
})
export class EpisodiosComponent implements OnInit, OnDestroy {
  public episodiosList :Iepisodio[] = [];

  protected readonly clearSubscriptions$ = new Subject();

  constructor(private episodioService: EpisodioService) { /* Empty */ }

  ngOnInit(): void {
    this.recoverEpisodios();
  }

  public recoverEpisodios(){
    return this.episodioService.getEpisodio().pipe(takeUntil(this.clearSubscriptions$),).subscribe((data) =>{
      this.episodiosList = data;
    })
  }

  public ngOnDestroy() {
    this.clearSubscriptions$.complete();
      
  }

}
