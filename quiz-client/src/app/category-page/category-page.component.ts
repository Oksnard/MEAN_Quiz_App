import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
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
		private route: ActivatedRoute,
		protected categoriesQuery: CategoriesQuery
	) {}

	category$: Observable<Category> | any

	ngOnInit(): void {
		let id = this.route.snapshot.paramMap.get('id')
		id = id.charAt(0).toUpperCase() + id.slice(1)
		this.category$ = this.categoriesQuery.selectEntity(
			({ title }) => title === id
		)
	}
}
