import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  // standalone: true,
  // imports: [],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css',
})
export class HeroListComponent {
  heroeNames = ['Ironman', 'Spiderman', 'Batman', 'Hulk', 'She hulk'];
  heroeBorrado? = '';

  borrarHeroe(): void {
    this.heroeBorrado = this.heroeNames.pop();
    console.log(this.heroeBorrado);
  }
}
