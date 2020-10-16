import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/components/characters/characters.component';


const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  // { path: '', component: CharactersComponent },
  { path: '**', redirectTo: 'details', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
