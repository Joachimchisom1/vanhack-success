import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import successData from '../../assets/success-cases';


class SuccessListTable extends Component {

  render() {

    return (
     <div>
      <BootstrapTable data={ successData } striped={true} hover={true} pagination={ true }>
        <TableHeaderColumn dataField='Id' isKey dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='Name' dataAlign="center" dataSort={true}>Name</TableHeaderColumn>
        <TableHeaderColumn dataField='City' dataAlign="center" dataSort={true}>City</TableHeaderColumn>
        <TableHeaderColumn dataField='Area' dataAlign="center" dataSort={true}>Area</TableHeaderColumn>
        <TableHeaderColumn dataField='Skill' dataAlign="center" dataSort={true}>Skill</TableHeaderColumn>
        <TableHeaderColumn dataField='Year' dataAlign="center" dataSort={true}>Year</TableHeaderColumn>
      </BootstrapTable>
     </div>
          );
        }
      }

    
  export default SuccessListTable;