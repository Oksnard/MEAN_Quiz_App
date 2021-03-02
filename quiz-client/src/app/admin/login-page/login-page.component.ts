import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { User } from '../../shared/interfaces'
import { AuthService } from '../shared/services/auth.service'

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.styl']
})
export class LoginPageComponent implements OnInit {
	constructor(private router: Router, private auth: AuthService) {}

	loginForm: FormGroup
	hidePassword = true

	ngOnInit(): void {
		this.loginForm = new FormGroup({
			email: new FormControl(null, [Validators.required, Validators.email]),
			password: new FormControl(null, [
				Validators.required,
				Validators.minLength(6)
			])
		})
	}

	getLoginErrorMessage(): string {
		if (this.loginForm.get('email').hasError('required')) {
			return 'You must enter a value'
		}
		return this.loginForm.get('email').hasError('email')
			? 'Not a valid email'
			: ''
	}

	public getPasswordErrorMessage(): string {
		if (this.loginForm.get('password').hasError('required')) {
			return 'You must enter a value'
		}
		return this.loginForm.get('password').hasError('minlength')
			? `The password field must be at least ${
					this.loginForm.get('password').errors.minlength.requiredLength
			  } characters long. Now ${
					this.loginForm.get('password').errors.minlength.actualLength
			  } characters`
			: ''
	}

	submitLoginForm(): void {
		if (this.loginForm.invalid) {
			return
		}

		const user: User = {
			username: this.loginForm.value.email,
			password: this.loginForm.value.password
		}

		this.auth.login(user).subscribe(() => {
			this.loginForm.reset()
			this.router.navigate(['/admin', 'dashboard'])
		})
	}
}
