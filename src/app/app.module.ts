import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrostyInputComponent } from './components/frosty-input/frosty-input.component';
import { FrostyButtonComponent } from './components/frosty-button/frosty-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FrostyInputComponent,
    FrostyButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
