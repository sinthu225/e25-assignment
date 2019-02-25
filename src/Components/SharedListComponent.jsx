import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


const SharedListComponent = (props) => {
    const { ListData, HeaderName, ShowPagination, MinRows } = props;
        const columnList = Object.keys(HeaderName).map(eachKey => {

            return {
                Header: HeaderName[eachKey],
                accessor: eachKey
            }
        });
        return (
            <ReactTable
                data={ListData}
                columns={columnList}
                showPagination={ShowPagination}
                minRows={MinRows}
            />

        );
} 
// class SharedListComponent extends Component {
//     render() {

//         const { ListData, HeaderName, ShowPagination, MinRows } = this.props;
//         const columnList = Object.keys(HeaderName).map(eachKey => {

//             return {
//                 Header: HeaderName[eachKey],
//                 accessor: eachKey
//             }
//         });
//         return (
//             <ReactTable
//                 data={ListData}
//                 columns={columnList}
//                 showPagination={ShowPagination}
//                 minRows={MinRows}
//             />

//         );
//     }
// }

SharedListComponent.propTypes = {
    ListData: PropTypes.array,
    HeaderName: PropTypes.object,
    ShowPagination: PropTypes.bool,
    MinRows: PropTypes.number
};


export default SharedListComponent;