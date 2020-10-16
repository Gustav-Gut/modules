import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './components/characters/characters.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [CharactersComponent, DetailsComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
