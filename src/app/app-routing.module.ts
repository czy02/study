import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MorenComponent } from './moren/moren.component';
import { BoughtComponent } from './bought/bought.component';
import { CaogaoComponent } from './caogao/caogao.component';
import { WillinComponent } from './willin/willin.component';
import { PartinComponent } from './partin/partin.component';
import { BackComponent } from './back/back.component';


const routes: Routes = [
  {path:'moren',component:MorenComponent},
  {path:'bought',component:BoughtComponent},
  {path:'caogao',component:CaogaoComponent},
  {path:'willin',component:WillinComponent},
  {path:'partin',component:PartinComponent},
  {path:'back',component:BackComponent},
  {path:'**',redirectTo:'moren'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
