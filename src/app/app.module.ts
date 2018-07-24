import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EcranComponent } from './ecran/ecran.component';
import { ClavierComponent } from './clavier/clavier.component';

@NgModule({
  declarations: [
    AppComponent,
    EcranComponent,
    ClavierComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
