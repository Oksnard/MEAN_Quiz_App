import { Component, OnInit } from '@angular/core'
import { Category } from '../shared/interfaces'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
	selector: 'app-categories-page',
	templateUrl: './categories-page.component.html',
	styleUrls: ['./categories-page.component.styl']
})
export class CategoriesPageComponent implements OnInit {
	constructor(private router: Router, private http: HttpClient) {}

	ngOnInit(): void {
		this.http
			.get('http://localhost:3000/categories')
			.subscribe((res: Array<any>) => {
				this.categories = res
			})
	}

	category = ''
	categories: Array<Category> = []
	frontCategories: Array<Category> = [
		// {
		// 	title: 'Vue',
		// 	image: '../../assets/vue-logo.png',
		// 	id: 0
		// },
		// {
		// 	title: 'Angular',
		// 	image: '../../assets/angular-logo.png',
		// 	id: 1
		// },
		// {
		// 	title: 'React',
		// 	image: '../../assets/react-logo.png',
		// 	id: 2
		// }
	]
	// backCategories: Array<Category> = [
	// 	{
	// 		title: 'Java',
	// 		image: '',
	// 		id: 0
	// 	},
	// 	{
	// 		title: 'Node.JS',
	// 		image: '',
	// 		id: 1
	// 	},
	// 	{
	// 		title: '.Net',
	// 		image: '',
	// 		id: 2
	// 	}
	// ]

	// setDirection(direction: string): void {
	// 	direction === 'front'
	// 		? (this.categories = this.frontCategories)
	// 		: (this.categories = this.backCategories)
	// }

	// setCategory(category: string): void {
	// 	this.category = category
	// 	this.router.navigate(['/', category])
	// }
}
