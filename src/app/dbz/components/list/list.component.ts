import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  characterList: Character[] = [];

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index: string): void {
    this.onDelete.emit(index);
  }
}
