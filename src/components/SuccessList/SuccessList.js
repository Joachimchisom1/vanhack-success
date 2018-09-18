import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import successData from '../../assets/success-cases';


class SuccessListTable extends Component {

        render() {

          return (
            <div>
             <BootstrapTable data={ successData } pagination={ true }>
                <TableHeaderColumn dataField='Id' isKey>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='Name'>Name</TableHeaderColumn>
                <TableHeaderColumn dataField='City'>City</TableHeaderColumn>
                <TableHeaderColumn dataField='Area'>Area</TableHeaderColumn>
                <TableHeaderColumn dataField='Skill'>Skill</TableHeaderColumn>
                <TableHeaderColumn dataField='Year'>Year</TableHeaderColumn>
             </BootstrapTable>
            </div>
          );
        }
      }

    
  export default SuccessListTable;