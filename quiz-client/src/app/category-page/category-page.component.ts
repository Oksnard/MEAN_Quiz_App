import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { CategoriesQuery, Category } from '../state/categories'
import { Observable } from 'rxjs'

@Component({
	selector: 'app-category-page',
	templateUrl: './category-page.component.html',
	styleUrls: ['./category-page.component.styl']
})
export class CategoryPageComponent implements OnInit {
	constructor(
		private router: Router,
		protected categoriesQuery: CategoriesQuery
	) {}

	category$: Observable<Category>

	ngOnInit(): void {
		this.category$ = this.categoriesQuery.selectEntity(({ title }) => {
			console.log(title)
			this.router.url.split('/')[2]
		})
	}
}
