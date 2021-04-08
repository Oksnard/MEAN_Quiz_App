import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ID } from '@datorama/akita'
import { tap } from 'rxjs/operators'
import { Category } from './category.model'
import { CategoriesStore } from './categories.store'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class CategoriesService {
	constructor(
		private categoriesStore: CategoriesStore,
		private http: HttpClient
	) {}

	get(): Observable<Category[]> {
		return this.http.get<Category[]>('http://localhost:3000/categories').pipe(
			tap((entities) => {
				this.categoriesStore.set(entities)
			})
		)
	}

	add(category: Category): void {
		this.categoriesStore.add(category)
	}

	update(id: ID, category: Partial<Category>): void {
		this.categoriesStore.update(id, category)
	}

	remove(id: ID): void {
		this.categoriesStore.remove(id)
	}
}
