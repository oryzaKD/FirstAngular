import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { TestComponent } from './test/test.component';
import { PaginatorModule } from 'primeng/paginator';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './public/home/home.component';
import { PublicComponent } from './public/public.component';
import { AdminComponent } from './admin/admin.component';

//Material Design
import { MaterialDesign } from './material/material';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { GalleryComponent } from './admin/gallery/gallery.component';
import { ImageUploaderComponent } from './admin/image-uploader/image-uploader.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { EmployeeDetailComponent } from './admin/employee-detail/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    PublicComponent,
    AdminComponent,
    ForgotComponent,
    GalleryComponent,
    ImageUploaderComponent,
    EmployeeComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    DialogModule,
    ConfirmDialogModule,
    MaterialDesign,
    DropdownModule,
    MenubarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    MultiSelectModule,
    PaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
