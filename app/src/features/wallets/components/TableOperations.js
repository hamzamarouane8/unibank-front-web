import React, {useState} from 'react';
import isEmpty from "lodash.isempty";
//import {IcUsers} from '@ryokit/icons';
import TableView from '../../../components/TableView'
import {TableStyle} from '../../../assets/styles/table'
import Commons from "../../../components/commons/Commons";

export default ({data, handleAllOperations}) => {

  const [_allOperations, _setAllOperations] = useState(false);
  const columns = [
    {"header": "Date d'operation", "name": "date",render: (value, record) => Commons.dateFormat(value)},
    {"header": "Motif", "name": "label",render: (value, record) => 'Libellé non disponible'},

    {
      "header": "Montant",
      "name": "amount",
      condition: (value, record) => record.amount < 0 ? 'negative' : 'positive'
      ,
      render: (value, record) => `${record.record.amount < 0 ? '' : '+'} ${record.record.amount} ${record.record.currency}`
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
            dataList={!isEmpty(data) ? data : []}
          />
        </div>
      </div>
    </TableStyle>
  )
}
