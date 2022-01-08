import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetasRoutingModule } from './planetas-routing.module';
import { PlanetasComponent } from './components/planetas/planetas.component';


@NgModule({
  declarations: [
    PlanetasComponent
  ],
  imports: [
    CommonModule,
    PlanetasRoutingModule
  ]
})
export class PlanetasModule { }
