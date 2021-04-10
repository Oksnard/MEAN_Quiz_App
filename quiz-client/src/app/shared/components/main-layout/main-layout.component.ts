import { Component } from '@angular/core'
import { AuthService } from '../../services/auth.service'

@Component({
	selector: 'app-main-layout',
	templateUrl: './main-layout.component.html',
	styleUrls: ['./main-layout.component.styl']
})
export class MainLayoutComponent {
	constructor(public auth: AuthService) {}

	showFiller = true
}
