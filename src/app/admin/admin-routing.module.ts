import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { SystemParametersComponent } from './system-parameters/system-parameters.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'role-management', component: RoleManagementComponent },
  { path: 'system-parameters', component: SystemParametersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
