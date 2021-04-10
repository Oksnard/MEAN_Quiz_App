export interface User {
	username: string
	password: string
	returnSecureToken?: boolean
}

export interface Category {
	title: string
	image: string
	id: number
}

export interface AuthToken {
	access_token: string
	expDate: number
}
