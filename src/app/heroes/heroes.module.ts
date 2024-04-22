import { NgModule } from '@angular/core';

import { HeroItemComponent } from './components/hero-item/hero-item.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';

@NgModule({
  imports: [],
  exports: [HeroItemComponent, HeroListComponent],
  declarations: [HeroItemComponent, HeroListComponent],
  providers: [],
})
export class HeroesModule {}
