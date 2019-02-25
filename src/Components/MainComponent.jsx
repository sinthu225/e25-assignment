import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SharedListComponent from './SharedListComponent';
import HeaderComponent from './HeaderComponent';

import { fetchPaymentAPI, fetchPaymentAPI_Leases } from '../Actions/MainAction';

class MainComponent extends Component {

    componentDidMount() {
        this.props.fetchPaymentAPI();
        this.props.fetchPaymentLease();
    }

    render() {

        const { isLoading, isError, paymentdata, leasedata  } = this.props;

        return (
            <div className="container">

                <HeaderComponent />


                <h3>Shared Table - Data from: leases/12</h3>


                <SharedListComponent
                    ListData={[paymentdata]}
                    HeaderName={{ id: 'Customer Id', start_date: 'Start Date', rent: 'Rent', payment_day: 'Payment Day' }}
                    ShowPagination={false}
                    MinRows={0}
                />

                <h3>Shared Table - Data from Leases - Bonus task</h3>


                <SharedListComponent
                    ListData={leasedata}
                    HeaderName={{ id: 'Customer Id', tenant: 'Teanant Name' }}
                    ShowPagination={false}
                    MinRows={0}
                />
            </div>
        );
    }
}

MainComponent.propTypes = {
    paymentdata: PropTypes.object,
    leasedata: PropTypes.array,
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.MainReducer.isLoading,
        isError: state.MainReducer.isError,
        errorMessage: state.MainReducer.errorMessage,
        paymentdata: state.MainReducer.data,
        leasedata: state.MainReducer.leasedata
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPaymentAPI: () => dispatch(fetchPaymentAPI()),
        fetchPaymentLease: () => dispatch(fetchPaymentAPI_Leases())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);