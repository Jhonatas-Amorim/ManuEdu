import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortuguesComponent } from './components/portugues/portugues.component';
import { MatematicaComponent } from './components/matematica/matematica.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortuguesComponent,
    MatematicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
