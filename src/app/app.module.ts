import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopComponent } from './desktop/desktop.component';
import { MobileComponent } from './mobile/mobile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { RoutingandpipesComponent } from './routingandpipes/routingandpipes.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { HttpreqComponent } from './httpreq/httpreq.component';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import{InterceptorsService} from 'src/app/services/interceptors.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    MobileComponent,
    DatabindingComponent,
    DirectivesComponent,
    RoutingandpipesComponent,
    ReactiveformsComponent,
    TemplatedrivenComponent,
    ParentComponent,
    ChildComponent,
    SiblingComponent,
    LifecycleComponent,
    HttpreqComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorsService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
