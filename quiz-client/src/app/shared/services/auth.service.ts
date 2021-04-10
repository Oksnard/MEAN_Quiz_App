import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { AuthToken, User } from '../interfaces'
import { Observable, Subject, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable()
export class AuthService {
	constructor(private http: HttpClient, public _snackBar: MatSnackBar) {}

	public error$: Subject<string> = new Subject<string>()

	get token(): string {
		const expDate = new Date(localStorage.getItem('token-exp-date'))
		if (new Date() > expDate) {
			this.logout()
			return null
		}
		return localStorage.getItem('auth-token')
	}

	login(user: User): Observable<any> {
		return this.http
			.post('http://localhost:3000/auth/login', user)
			.pipe(tap(this.setToken), catchError(this.handleError.bind(this)))
	}

	logout(): void {
		this.setToken(null)
	}

	isAuth(): boolean {
		return !!this.token
	}

	private handleError(error: HttpErrorResponse) {
		const { message } = error.error

		this._snackBar.open(message.toUpperCase(), 'CLOSE', {
			duration: 3000,
			horizontalPosition: 'center',
			verticalPosition: 'top'
		})

		this.error$.next('Invalid login or password')

		return throwError(error)
	}

	private setToken(res: AuthToken | null): void {
		if (res) {
			const expDate = new Date(new Date().getTime() + res.expDate * 1000)
			localStorage.setItem('auth-token', res.access_token)
			localStorage.setItem('token-exp-date', expDate.toString())
		} else {
			localStorage.clear()
		}
	}
}
