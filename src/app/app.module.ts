import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { HomepageComponent } from './homepage/homepage.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { interceptor } from './interceptor/interceptor';
import { TermAndConditionsComponent } from './register-component/TermAndConditions/term-and-conditions/term-and-conditions.component';
import { RecoverPasswordComponent } from './login-component/recover-password/recover-password.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { FYQComponent } from './fyq/fyq.component';

const appRoutes:Routes=[
{path:'',component:HomepageComponent},
{path:'search', component:HomeComponentComponent},
{path:'login', component:LoginComponentComponent},
{path:'register', component:RegisterComponentComponent},
{path:'table', component:TableComponentComponent},
{path:'fyq', component:FYQComponent},
{path:'team', component:TeamInfoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    TableComponentComponent,
    HomeComponentComponent,
    TermAndConditionsComponent,
    RecoverPasswordComponent,
    TeamInfoComponent,
    FYQComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    MatExpansionModule,
    MatDialogModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: interceptor,
      multi: true,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }
