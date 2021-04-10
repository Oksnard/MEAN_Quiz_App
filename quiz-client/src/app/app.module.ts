import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SharedModule } from './shared/shared.module'
import { LoginPageComponent } from './login-page/login-page.component'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatSidenavModule } from '@angular/material/sidenav'
import { CategoriesPageComponent } from './categories-page/categories-page.component'
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core'
import { QuizPageComponent } from './quiz-page/quiz-page.component'
import { CategoryPageComponent } from './category-page/category-page.component'
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools'
import { environment } from '../environments/environment'
import { AuthGuard } from './shared/services/auth.guard'

@NgModule({
	declarations: [
		AppComponent,
		MainLayoutComponent,
		LoginPageComponent,
		CategoriesPageComponent,
		QuizPageComponent,
		CategoryPageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		BrowserAnimationsModule,
		SharedModule,
		CommonModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatSnackBarModule,
		FormsModule,
		ReactiveFormsModule,
		MatSidenavModule,
		MatRippleModule,
		MatNativeDateModule,
		environment.production ? [] : AkitaNgDevtools.forRoot()
	],
	providers: [AuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule {}
