import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import successData from '../../assets/success-cases';
import { fillEmptyData } from '../../utils/fill-empty-data';


class SuccessListTable extends Component {

  state = {
    isLoading: false,
    parsedData:[]
  };
  componentDidMount() {
    const parsedData = fillEmptyData(successData);
    this.setState({ isLoading: true, parsedData});
  }
  render() {
    const columnFilter = { type: 'TextFilter', delay: 1000 };
    return (
      <div>
        {
         this.state.isLoading &&
          <BootstrapTable data={ this.state.parsedData } striped={true} hover={true} pagination={ false }>
            <TableHeaderColumn dataField='Id' isKey dataAlign="center"
              filter={ columnFilter }  >ID</TableHeaderColumn>
            <TableHeaderColumn dataField='Name' filter={ columnFilter } 
              dataAlign="center" >Name</TableHeaderColumn>
            <TableHeaderColumn dataField='City' filter={ columnFilter }  
              dataAlign="center" >City</TableHeaderColumn>
            <TableHeaderColumn dataField='Area' filter={ columnFilter }  
              dataAlign="center" >Area</TableHeaderColumn>
            <TableHeaderColumn dataField='Skill' filter={ columnFilter }  
              dataAlign="center" >Skill</TableHeaderColumn>
            <TableHeaderColumn dataField='Year' filter={ columnFilter }  
              dataAlign="center" >Year</TableHeaderColumn>
         </BootstrapTable>
        }
      </div>
    );
  }
}

export default SuccessListTable;