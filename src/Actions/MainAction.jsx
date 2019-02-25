import {
    FETCH_PAYMENTS,
    FETCH_PAYMENTS_SUCCESS,
    FETCH_PAYMENTS_ERROR,
    FETCH_PAYMENTS_SUCCESS_LEASE
} from '../Constants/Constants';

import axios from 'axios';


export const fetchPaymentAction = () => ({ type: FETCH_PAYMENTS });

export const fetchPaymentSuccessAction = (data) => ({ type: FETCH_PAYMENTS_SUCCESS, data });

export const fetchLeaseSuccessAction = (leasedata) => ({ type: FETCH_PAYMENTS_SUCCESS_LEASE, leasedata });

export const fetchPaymentErrorAction = (error) => ({ type: FETCH_PAYMENTS_ERROR, error });

export const fetchPaymentAPI = () => {
    return dispatch => {
        dispatch(fetchPaymentAction());

        axios.get('https://hiring-task-api.herokuapp.com/v1/leases/12')
        .then(response => {
            dispatch(fetchPaymentSuccessAction(response.data));
        })
        .catch(error => {
            dispatch(fetchPaymentErrorAction(error));
        })
    }
}

export const fetchPaymentAPI_Leases = () => {
    return dispatch => {
        dispatch(fetchPaymentAction());

        axios.get('https://hiring-task-api.herokuapp.com/v1/leases/')
        .then(response => {
            dispatch(fetchLeaseSuccessAction(response.data));
        })
        .catch(error => {
            dispatch(fetchPaymentErrorAction(error));
        })
    }
}