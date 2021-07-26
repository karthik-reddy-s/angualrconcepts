import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{DatabindingComponent} from 'src/app/databinding/databinding.component';
import{DirectivesComponent} from 'src/app/directives/directives.component';
import{RoutingandpipesComponent} from 'src/app/routingandpipes/routingandpipes.component';
import{ReactiveformsComponent} from 'src/app/reactiveforms/reactiveforms.component';
import{TemplatedrivenComponent} from './templatedriven/templatedriven.component';
import{ParentComponent} from './parent/parent.component';
import{SiblingComponent} from './sibling/sibling.component';
import{LifecycleComponent} from './lifecycle/lifecycle.component';
import{HttpreqComponent} from './httpreq/httpreq.component';
import{LoginComponent} from './login/login.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import{AuthGuard} from './_guards/auth.guard';


const routes: Routes = [{path:"login",component:LoginComponent},{path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},{path:"http",component:HttpreqComponent},{path:"lifecyclecomp",component:LifecycleComponent},{path:"siblingcomp",component:SiblingComponent},{path:"parentcomp",component:ParentComponent},
  {path:"templatedriven",component:TemplatedrivenComponent},{path:"reactiveforms",component:ReactiveformsComponent},{path:"databinding",component:DatabindingComponent},{path:"routingandpipes",component:RoutingandpipesComponent},{path:"directives",component:DirectivesComponent},
  {path:'lazy',
  loadChildren:()=>import('./lazy/lazy.module').then((m)=>m.LazyModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
