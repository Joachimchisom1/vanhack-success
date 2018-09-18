import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import successData from '../../assets/success-cases';


class SuccessListTable extends Component {

  render() {

    return (
     <div>
         <BootstrapTable data={ successData } striped={true} hover={true}    pagination={ true } >
            <TableHeaderColumn dataField='Id' isKey dataAlign="center" >ID</TableHeaderColumn>
            <TableHeaderColumn dataField='Name' dataAlign="center" >Name</TableHeaderColumn>
            <TableHeaderColumn dataField='City' dataAlign="center" >City</TableHeaderColumn>
            <TableHeaderColumn dataField='Area' dataAlign="center" >Area</TableHeaderColumn>
            <TableHeaderColumn dataField='Skill' dataAlign="center" >Skill</TableHeaderColumn>
            <TableHeaderColumn dataField='Year' dataAlign="center" >Year</TableHeaderColumn>
         </BootstrapTable>
     </div>
          );
        }
      }

    
  export default SuccessListTable;