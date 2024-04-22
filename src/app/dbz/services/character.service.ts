import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private characters: Character[] = [
    {
      name: 'Krillin',
      power: 500,
      id: uuid(),
    },
    {
      name: 'Goku',
      power: 10000,
      id: uuid(),
    },
    {
      name: 'Vegeta',
      power: 7000,
      id: uuid(),
    },
    {
      name: 'Freezer',
      power: 9000,
      id: uuid(),
    },
  ];

  getCharacters(): Character[] {
    return this.characters;
  }

  addCharacter(character: Character): void {
    character.id = uuid();
    console.log(character);

    this.characters.push(character);
  }

  deleteCharacter(id: string): void {
    // this.characters.splice(index, 1); // 1 indica eliminar solo un elemento
    this.characters.filter((character) => character.id !== id);
  }
}
