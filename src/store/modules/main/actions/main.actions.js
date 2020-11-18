import { SET_LIST, SET_PENDING_STATE } from '../mutations/main.mutations';
import requestManager, { API_URL } from '@/services/requestManager/requestManager';

export const FETCH_LIST = 'fetchList';

export default {
	/**
	 * @function
	 * @param {Object} store
	 */
	async [FETCH_LIST]({ commit }) {
		commit(SET_PENDING_STATE, true);

		try {
			const { data } = await requestManager.fetch(`${API_URL}/posts`)

			commit(SET_LIST, data);
		} catch (errorResponse) {
			throw errorResponse;
		} finally {
			commit(SET_PENDING_STATE, false);
		}
	},
};
