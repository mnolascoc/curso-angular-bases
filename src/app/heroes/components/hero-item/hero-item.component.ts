import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-item',
  // standalone: true,
  // imports: [],
  templateUrl: './hero-item.component.html',
  styleUrl: './hero-item.component.css',
})
export class HeroItemComponent {
  nombre: string = 'ironman';
  edad: number = 45;

  get nombreEnMayuscula(): string {
    return this.nombre.toUpperCase();
  }

  getDescripcionHeroe(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombreHeroe(): void {
    this.nombre = 'spiderman';
  }

  cambiarEdadHeroe(): void {
    this.edad = 25;
  }

  resetear(): void {
    this.nombre = 'ironman';
    this.edad = 45;
  }
}
