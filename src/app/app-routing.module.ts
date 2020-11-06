import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrostyErrorPageComponent } from './pages/frosty-error-page/frosty-error-page.component';
import { FrostyHomeComponent } from './pages/frosty-home/frosty-home.component';
import { FrostyLoginComponent } from './pages/frosty-login/frosty-login.component';
import { FrostyRegistrationComponent } from './pages/frosty-registration/frosty-registration.component';

const routes: Routes = [
  { path: '', component: FrostyHomeComponent, pathMatch: 'full' },
  { path: 'home', component: FrostyHomeComponent },
  { path: 'login', component: FrostyLoginComponent },
  { path: 'registration', component: FrostyRegistrationComponent },
  { path: '**', component: FrostyErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
