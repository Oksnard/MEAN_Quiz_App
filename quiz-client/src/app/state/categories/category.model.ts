export interface Category {
	id: number | string
	title: string
	questions: Array<any>
}

export function createCategory(params: Partial<Category>) {
	return {} as Category
}
