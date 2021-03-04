import { NgModule } from '@angular/core'
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component'
import { QuizPageComponent } from './quiz-page/quiz-page.component'
import { LoginPageComponent } from './login-page/login-page.component'
import { AuthService } from './shared/services/auth.service'
import { CategoriesPageComponent } from './categories-page/categories-page.component'

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			// { path: '', redirectTo: '/login', pathMatch: 'full' },
			{ path: 'login', component: LoginPageComponent },
			{ path: '', component: QuizPageComponent },
			{ path: 'categories', component: CategoriesPageComponent }
		]
	},
	{
		path: 'admin',
		loadChildren: () =>
			import('./admin/admin.module').then((m) => m.AdminModule)
	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: PreloadAllModules
		})
	],
	exports: [RouterModule],
	providers: [AuthService]
})
export class AppRoutingModule {}
