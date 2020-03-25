import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app.module').then(m => m.AppModule),
    pathMatch: 'full'
  },
  {
    path: 'obituaries',
    loadChildren: () => import('./obituaries/obituaries.module').then(m => m.ObituariesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
