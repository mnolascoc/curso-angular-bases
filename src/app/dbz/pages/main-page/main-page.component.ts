import { Component, OnInit, inject } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-main-page',
  // standalone: true,
  // imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit {
  characters: Character[] = [];
  characterService = inject(CharacterService);

  ngOnInit(): void {
    this.characters = this.characterService.getCharacters();
  }

  addCharacterToList(character: Character): void {
    console.log('character name in main:' + character.name);
    console.log('character power in main:' + character.power);
    this.characterService.addCharacter(character);
  }

  onDeleteCharacter(index: string): void {
    this.characterService.deleteCharacter(index);
  }
}
