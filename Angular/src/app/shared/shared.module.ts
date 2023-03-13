import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonComponent } from './components/mat-button/mat-button.component';
import { SharedViewComponent } from './shared-view/shared-view.component';



@NgModule({
  declarations: [
    MatButtonComponent,
    SharedViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonComponent
  ]
})
export class SharedModule { }
