import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EmployeeDetailComponent } from './admin/employee-detail/employee-detail.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { ImageUploaderComponent } from './admin/image-uploader/image-uploader.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './public/home/home.component';
import { PublicComponent } from './public/public.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'test', component: TestComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'image-uploader', component: ImageUploaderComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'employee-detail', component: EmployeeDetailComponent },
    ],
  },
  {
    path: 'public',
    component: PublicComponent,
    children: [
      { path: 'home', component: HomeComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponent = [
  TestComponent
];
