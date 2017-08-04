import { action, observable, extendObservable } from 'mobx'
import { api } from '../api'

class MyStore {

	@observable content = []
	@observable fetching = false

	@action fetchData () {

		this.fetching = true

		 api.get('/v1/my-data')
		.then(response => {
			// Response here is pre formated by ApiSauce middleware check the doc of apisauce

			if (response.ok) {
				this.content = response.data.data

			} else {
				this.content = []
			}
			this.fetching = false
		})
		.catch(error => {
			console.log('FETCHING ERROR')
			console.log(error)
		})
	}
}

const myStore = new MyStore()
export default myStore
