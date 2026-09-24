import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHttp } from './customer-http/customer-http';
const routes: Routes = [
  {
    path: '',
    component: CustomerHttp
  },
  {
    path: 'customer-http',
    component : CustomerHttp
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
