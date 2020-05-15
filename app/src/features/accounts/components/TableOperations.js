import React, {useState} from 'react';
import {TableStyle} from '../../../assets/styles/table'
import TableView from '../../../components/TableView'
import Commons from '../../../components/commons/Commons'
//-------------------------------------------------------

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default ({data, handleAllOperations}) => {

  const [_allOperations, _setAllOperations] = useState(false);

  const columns = [
    {"header": "Date d'operation", "name": "operationDate", render: (value, record) => Commons.dateFormat(value),alignCell:'center',align:'center'},
    {"header": "Date de valeur", "name": "valueDate",render: (value, record) => Commons.dateFormat(value),alignCell:'center',align:'center'},
    {"header": "Motif", "name": "label",alignCell:'center',align:'center'},
    {
      "header": "Montant",width:1,align:'center',
      "name": "amount",
      condition: (value, record) => record.amount < 0 ? 'negative' : 'positive'
      ,
      render: (value, record) => `${record.record.amount < 0 ? '' : '+'} ${numberWithCommas(record.record.amount)} ${record.record.currency}`
    },
    {
      "header": "Etat", "name": "status", render: (value) => value === 'in progress' ? `en cours` : `effectueé`,align:'center',alignCell:'center',
      condition: (value) => value === 'in progress' ? "status-progress" : "status-done"
    }
  ];

  return (
    <TableStyle>
      <div className="sg-table">
        <div className="widget-title">
          Derniéres opérations
        </div>
        <div className="table-container">
          <TableView
            todosPerPage={10}
            columns={columns}
            dataList={(data || [])}
          />
        </div>
      </div>
    </TableStyle>
  )
}
