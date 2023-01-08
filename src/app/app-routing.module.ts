import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {Index2Component} from "./index2/index2.component";
import {Index3Component} from "./index3/index3.component";

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'index2',component:Index2Component},
  {path:'index3',component:Index3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
