import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortuguesComponent } from './components/portugues/portugues.component';
import { MatematicaComponent } from './components/matematica/matematica.component';

const routes: Routes = [
  {path: 'portugues', component: PortuguesComponent},
  {path: 'matematica', component: MatematicaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
