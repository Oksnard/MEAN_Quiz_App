import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from '../../../shared/interfaces'
import { Observable } from 'rxjs'

@Injectable()
export class AuthService {
	constructor(private http: HttpClient) {}

	get token(): string {
		return ''
	}

	login(user: User): Observable<any> {
		return this.http.post('http://localhost:3000/auth/login', user)
	}

	logout(user: User) {
		this.http.post('', user)
	}

	isAuth(): boolean {
		return !!this.token
	}

	private setToken() {}
}
