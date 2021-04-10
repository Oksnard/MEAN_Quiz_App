import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component'
import { LoginPageComponent } from '../login-page/login-page.component'
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { SharedModule } from '../shared/shared.module'
import { AuthGuard } from '../shared/services/auth.guard'

@NgModule({
	declarations: [AdminLayoutComponent, DashboardPageComponent],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				component: AdminLayoutComponent,
				children: [
					{
						path: 'dashboard',
						component: DashboardPageComponent,
						canActivate: [AuthGuard]
					}
				]
			}
		])
	],
	exports: [RouterModule]
})
export class AdminModule {}
