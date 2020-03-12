import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObituaryComponent } from './obituary/obituary.component';



@NgModule({
  declarations: [ObituaryComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ObituaryComponent
  ]
})
export class ObituariesModule { }
