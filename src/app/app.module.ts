import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrostyInputComponent } from './components/frosty-input/frosty-input.component';
import { FrostyButtonComponent } from './components/frosty-button/frosty-button.component';
import { FrostyHeaderComponent } from './components/frosty-header/frosty-header.component';
import { FrostyFooterComponent } from './components/frosty-footer/frosty-footer.component';
import { FrostyAxHandlerComponent } from './components/frosty-ax-handler/frosty-ax-handler.component';
import { FrostyImageComponent } from './components/frosty-image/frosty-image.component';
import { FrostyHomeComponent } from './pages/frosty-home/frosty-home.component';
import { FrostyRegistrationComponent } from './pages/frosty-registration/frosty-registration.component';
import { FrostyLoginComponent } from './pages/frosty-login/frosty-login.component';

@NgModule({
  declarations: [
    AppComponent,
    FrostyInputComponent,
    FrostyButtonComponent,
    FrostyHeaderComponent,
    FrostyFooterComponent,
    FrostyAxHandlerComponent,
    FrostyImageComponent,
    FrostyHomeComponent,
    FrostyRegistrationComponent,
    FrostyLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
