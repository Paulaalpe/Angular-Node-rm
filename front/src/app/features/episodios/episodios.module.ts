import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodiosRoutingModule } from './episodios-routing.module';
import { EpisodiosComponent } from './components/episodios/episodios.component';


@NgModule({
  declarations: [
    EpisodiosComponent
  ],
  imports: [
    CommonModule,
    EpisodiosRoutingModule
  ]
})
export class EpisodiosModule { }
