import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SharedViewComponent } from './shared/shared-view/shared-view.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'sharedView', component: SharedViewComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
