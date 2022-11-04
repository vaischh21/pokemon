import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDataComponent } from './components/pokemon-data/pokemon-data.component';

const routes: Routes = [
  {
    path:'',
    redirectTo : '/pokemon',
    pathMatch : 'full'
  },
  {
    path: 'pokemon',
    pathMatch : 'full',
    component: PokemonDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
