import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component'
import { LoginPageComponent } from './login-page/login-page.component'
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component'
import { AuthService } from './shared/services/auth.service'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module'

@NgModule({
	declarations: [
		AdminLayoutComponent,
		LoginPageComponent,
		DashboardPageComponent
	],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				component: AdminLayoutComponent,
				children: [
					{ path: '', redirectTo: '/admin/login', pathMatch: 'full' },
					{ path: 'login', component: LoginPageComponent },
					{ path: 'dashboard', component: DashboardPageComponent }
				]
			}
		])
	],
	exports: [RouterModule],
	providers: [AuthService]
})
export class AdminModule {}
