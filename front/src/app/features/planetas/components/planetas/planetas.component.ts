import { PlanetaService } from './../../services/planeta.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Iplanet } from '../../models/iplanet';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.scss']
})
export class PlanetasComponent implements OnInit, OnDestroy {
  public planetasList: Iplanet[] = [];
  protected readonly clearSubscriptions$ = new Subject();

  constructor(private planetaService: PlanetaService) { }

  ngOnInit(): void {
    this.recoverPlanetas();
  }
  
  public recoverPlanetas(){
    return this.planetaService.getPlaneta().pipe(takeUntil(this.clearSubscriptions$),).subscribe((data) => {
      this.planetasList = data;
    })
  }

  public ngOnDestroy() {
      this.clearSubscriptions$.complete();
  }

}
