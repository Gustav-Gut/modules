import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { DetailsComponent } from './components/details/details.component';


const routes: Routes = [
  {
    path: 'characters', component: CharactersComponent,
    children: [
      { path: 'details', component: DetailsComponent }
    ],
  },
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
