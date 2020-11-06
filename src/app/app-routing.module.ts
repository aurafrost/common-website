import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrostyErrorPageComponent } from './pages/frosty-error-page/frosty-error-page.component';
import { FrostyHomeComponent } from './pages/frosty-home/frosty-home.component';
import { FrostyLoginComponent } from './pages/frosty-login/frosty-login.component';
import { FrostyRegistrationComponent } from './pages/frosty-registration/frosty-registration.component';

const routes: Routes = [
  { path: '', component: FrostyHomeComponent, pathMatch: 'full' },
  { path: 'login', component: FrostyLoginComponent,  pathMatch: 'full' },
  { path: 'registration', component: FrostyRegistrationComponent,  pathMatch: 'full' },
  { path: '**', component: FrostyErrorPageComponent,  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
