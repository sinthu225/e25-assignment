import {
	FETCH_PAYMENTS,
	FETCH_PAYMENTS_SUCCESS,
	FETCH_PAYMENTS_ERROR
} from '../Constants/Constants';


const INITIAL_STATE = {
	isLoading: false,
	isError: false,
	errorMessage: '',
	data: [],
	columns: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_PAYMENTS:
			return {
				...state,
				isLoading: true,
				isError: false
			};
		case FETCH_PAYMENTS_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.data,
				columns: action.data
			};
		case FETCH_PAYMENTS_ERROR:
			return {
				...state,
				isLoading: false,
				isError: true
			};
		default:
			return INITIAL_STATE;
	}
};