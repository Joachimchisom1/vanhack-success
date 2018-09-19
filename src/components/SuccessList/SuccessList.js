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

    return (
      <div>
        {
         this.state.isLoading &&
          <BootstrapTable data={ this.state.parsedData } striped={true} hover={true} pagination={ false }>
            <TableHeaderColumn dataField='Id' isKey dataAlign="center"
              filter={ { type: 'TextFilter', delay: 1000 } }  >ID</TableHeaderColumn>
            <TableHeaderColumn dataField='Name' filter={ { type: 'TextFilter', delay: 1000 } } 
              dataAlign="center" >Name</TableHeaderColumn>
            <TableHeaderColumn dataField='City' filter={ { type: 'TextFilter', delay: 1000 } }  
              dataAlign="center" >City</TableHeaderColumn>
            <TableHeaderColumn dataField='Area' filter={ { type: 'TextFilter', delay: 1000 } }  
              dataAlign="center" >Area</TableHeaderColumn>
            <TableHeaderColumn dataField='Skill' filter={ { type: 'TextFilter', delay: 1000 } }  
              dataAlign="center" >Skill</TableHeaderColumn>
            <TableHeaderColumn dataField='Year' filter={ { type: 'TextFilter', delay: 1000 } }  
              dataAlign="center" >Year</TableHeaderColumn>
         </BootstrapTable>
        }
      </div>
    );
  }
}

export default SuccessListTable;