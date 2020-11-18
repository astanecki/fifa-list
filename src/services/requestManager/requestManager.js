import axios from 'axios';

export const API_URL = 'https://jsonplaceholder.typicode.com';

export default {
	fetch: url => {
		return axios.get(url);
	},
}
