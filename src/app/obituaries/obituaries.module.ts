import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObituaryContainerComponent } from './obituary-container/obituary-container.component';
import { Routes, RouterModule } from '@angular/router';

const obituaryRoutes: Routes = [
  { path: '', component: ObituaryContainerComponent, pathMatch: 'full' },  
  {
    path: ':slug',
    loadChildren: () => import('./obituary/obituary.module').then(m => m.ObituaryModule)
  }
]

@NgModule({
  declarations: [ObituaryContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(obituaryRoutes)
  ],
  exports: [
    ObituaryContainerComponent
  ]
})
export class ObituariesModule { }
