import { create } from 'apisauce'
import config from '../config'

// add global config here
export const api = create({
	baseURL: config.server,
	timeout: 1000
})
