import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import successData from '../../assets/success-cases';


class SuccessListTable extends Component {

        render() {

          return (
            <div>
             <BootstrapTable data={ successData } pagination={ true }>
                <TableHeaderColumn dataField='id' isKey>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                <TableHeaderColumn dataField='city'>City</TableHeaderColumn>
                <TableHeaderColumn dataField='area'>Area</TableHeaderColumn>
                <TableHeaderColumn dataField='skill'>Skill</TableHeaderColumn>
                <TableHeaderColumn dataField='year'>Year</TableHeaderColumn>
             </BootstrapTable>
            </div>
          );
        }
      }

    
  export default SuccessListTable;