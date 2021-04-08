import { Injectable } from '@angular/core'
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita'
import { Category } from './category.model'

export type CategoriesState = EntityState<Category>

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'categories', idKey: '_id' })
export class CategoriesStore extends EntityStore<CategoriesState> {
	constructor() {
		super()
	}
}
