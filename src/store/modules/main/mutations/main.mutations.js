export const SET_LIST = 'set-list';

export const SET_PENDING_STATE = 'setPendingState';

export default {
	/**
	 * @function
	 * @param {Object} state
	 * @param {Boolean} pending
	 */
	[SET_PENDING_STATE](state, pending) {
		state.pending = pending;
	},

	[SET_LIST](state, list) {
		state.list = list;
	},
};
