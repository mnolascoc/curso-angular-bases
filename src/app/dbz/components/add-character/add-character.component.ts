import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  character: Character = {
    name: '',
    power: 0,
  };

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  emitCharacter(): void {
    if (this.character.name.length === 0) return;

    // si es objecto colocar ...{objeto} porque si no no se pinta los valores en el padre
    this.onNewCharacter.emit({ ...this.character });

    this.character.name = '';
    this.character.power = 0;
  }
}
