import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: 'app-admin-layout',
	templateUrl: './admin-layout.component.html',
	styleUrls: ['./admin-layout.component.styl']
})
export class AdminLayoutComponent {
	constructor(private router: Router) {}

	logout($event: MouseEvent): void {
		$event.preventDefault()
		this.router.navigate(['/', 'login'])
	}
}
