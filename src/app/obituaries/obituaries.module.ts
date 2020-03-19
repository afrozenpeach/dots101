import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObituaryComponent } from './obituary/obituary.component';
import { ObituaryContainerComponent } from './obituary-container/obituary-container.component';



@NgModule({
  declarations: [ObituaryComponent, ObituaryContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ObituaryComponent,
    ObituaryContainerComponent
  ]
})
export class ObituariesModule { }
