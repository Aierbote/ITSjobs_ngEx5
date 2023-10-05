import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiglioComponent } from './components/figlio/figlio.component';
import { PadreComponent } from './components/padre/padre.component';

@NgModule({
  declarations: [
    AppComponent,
    FiglioComponent,
    PadreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
