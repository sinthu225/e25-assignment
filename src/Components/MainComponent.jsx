import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SharedListComponent from './SharedListComponent';
import HeaderComponent from './HeaderComponent';

import { fetchPaymentAPI } from '../Actions/MainAction';

class MainComponent extends Component {

    componentDidMount() {
        this.props.fetchPaymentAPI();
    }

    render() {

        const { isLoading, isError, data } = this.props;

        return (
            <div className="container">

                <HeaderComponent />


                <h3>Shared Table - Data from: leases/12</h3>


                <SharedListComponent
                    ListData={[data]}
                    HeaderName={{ id: 'Customer Id', start_date: 'Start Date', rent: 'Rent', payment_day: 'Payment Day' }}
                    ShowPagination={false}
                    MinRows={0}
                />

                <h3>Shared Table - Data from Leases - Bonus task</h3>


                <SharedListComponent
                    ListData={[data]}
                    HeaderName={{ id: 'Customer Id', start_date: 'Start Date', rent: 'Rent', payment_day: 'Payment Day' }}
                    ShowPagination={false}
                    MinRows={0}
                />
            </div>
        );
    }
}

MainComponent.propTypes = {
    userDetails: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.MainReducer.isLoading,
        isError: state.MainReducer.isError,
        errorMessage: state.MainReducer.errorMessage,
        data: state.MainReducer.data,
        columns: state.MainReducer.columns
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPaymentAPI: () => dispatch(fetchPaymentAPI())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);