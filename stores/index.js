import myStore from './MyStore'

let store = null

export default class Store {
	constructor() {
		this.myStore = myStore
	}
}

export function initStore(isServer) {
	if (isServer && typeof window === 'undefined') {
		return new Store()
	} else {
		if (store === null) {
			store = new Store()
		}
		return store
	}
}
