import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { AuthService } from './auth.service'
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot
} from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private auth: AuthService, private router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		if (this.auth.isAuth()) {
			return true
		} else {
			this.auth.logout()
			this.router.navigate(['/', 'login'], {
				queryParams: {
					loginAgain: true
				}
			})
		}
	}
}
