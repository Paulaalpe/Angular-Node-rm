import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterCardComponent } from './components/characters/character-card/character-card.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
