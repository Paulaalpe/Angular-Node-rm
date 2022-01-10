import { Component, Input, OnInit } from '@angular/core';
import { Icharacters } from 'src/app/features/characters/models/icharacters';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input() public character!:Icharacters;

  constructor() { }

  ngOnInit(): void {
  }

}
