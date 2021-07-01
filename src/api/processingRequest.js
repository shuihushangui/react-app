import axios from 'axios'

let serverUrl = '/api1'

export default function ajax (url, data={}, type="GET") {
	return new Promise((resolve, reject) => {
		let promise
		if (type == "GET") {
			promise = axios.get(serverUrl + url, {params:data})
		} else if (type == "POST") {
			promise = axios.post(serverUrl + url, data)
		}
		promise.then(res => {
			resolve(res)
		}).catch(err => {
			console.log(err)
		})
	})
}