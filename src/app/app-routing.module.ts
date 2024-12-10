import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayComponent } from './today/today.component';
import { InplayComponent } from './inplay/inplay.component';
import { TommorowComponent } from './tommorow/tommorow.component';

const routes: Routes = [
  {
    path:'',component:InplayComponent
  },
  {
    path:'today',component:TodayComponent
  },
  {
    path:"inplay",component:InplayComponent
  },
  {
    path:"tommorow",component:TommorowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
