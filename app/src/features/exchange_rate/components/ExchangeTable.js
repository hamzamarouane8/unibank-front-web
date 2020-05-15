import React, {useState} from 'react';
import {TableStyle} from '../../../assets/styles/table'
import TableView from '../../../components/TableView'
import {assets_countrie} from './outils'

//-------------------------------------------------------

function numberWithCommas(x) {
  return x.toFixed(3);
}

const Unite = ({img, text}) => (
  <div className="column-unite">
    <img src={img} alt=''/> {text}
  </div>
)


export default ({handleAllOperations}) => {
  const [dataFinal, setDataFinal] = React.useState([]);
  let listFinal = [];
  const data = {
    "timestamp": 1567532345,
    "date": "2019-09-03",
    "base": "XAF",
    "symbols": {
      "AED": "United Arab Emirates Dirham",
      "AFN": "Afghan Afghani",
      "ALL": "Albanian Lek",
      "AMD": "Armenian Dram",
      "CAD": "Canadian Dollars",
      "XAF": "Central African CFA franc",
      "XOF": "West African CFA franc",
      "JPY": "Japanese yen",
      "USD": "United States Dollar",
      "AUD": "Australian dollar",
      "CHF": "Swiss franc",
      "CNY": "Renminbi",
      "GBP": "Pound sterling"
    },
    "rates": {
      "AED": [4.566015, 4.560132],
      "AFN": [1.366005, 1.860132],
      "ALL": [4.366125, 4.890131],
      "AMD": [0.366655, 0.600132],
      "XAF": [7.362344, 7.860410],
      "XOF": [9.362344, 9.860489],
      "AUD": [1.566015, 1.560132],
      "CAD": [1.560132, 1.566015],
      "CHF": [1.154727, 1.560132],
      "CNY": [7.827874, 7.727874],
      "GBP": [0.882047, 0.892047],
      "JPY": [132.360679, 131.360679],
      "USD": [1.23396, 1.23196]
    }
  }

  React.useEffect(() => {
    dataManagement(data);
  }, []);

  const dataManagement = (data) => {
    Object.entries(data.symbols).forEach(entry => {
      let item = {buy:0,sale:0,img:null,currentCurency:data.base,unit: 1,label:'',code:''}
      let key = entry[0];
      let label = entry[1];
      item = {...item,label:label,code:key};
      Object.entries(data.rates).forEach(entry => {
        let code = entry[0];
        let value = entry[1];
        if (key === code) {
          item = {...item,sale:value[0],buy:value[1]};
        }
      });
      Object.entries(assets_countrie).forEach(entry => {
        let code = entry[0];
        if (key === code) {
          item ={...item,img:entry[1]};
        }
      });
      listFinal.push(item)
    });
    setDataFinal(listFinal);
  }

  const columns = [
    {
      "header": "Unite", "align": "center", "alignCell": "left",
      "name": "unit",
      render: (value, record) => <Unite img={record.record.img} text={record.record.unit}/>,

    },
    {"header": "Devise", "name": "code", "align": "center", "alignCell": "center"},
    {
      "header": "Libellé",
      "name": "label",
      "className": "d-none d-md-block spesific",
      "align": "center",
      "alignCell": "center"
    },
    {
      "header": "Achat", "align": "center", "width": "2",
      "name": "buy",
      render: (value, record) => `${numberWithCommas(record.record.buy)} ${record.record.currentCurency}`,
      condition: (value) => "balance"

    },
    {
      "header": "Vente", "align": "center", "width": "2",
      "name": "vente",
      render: (value, record) => `${numberWithCommas(record.record.sale)} ${record.record.currentCurency}`,
      condition: (value) => "balance"


    }
  ];

  return (
    <TableStyle>
      <div className="sg-table">
        <div className="table-container">
          <TableView
            todosPerPage={10}
            columns={columns}
            dataList={(dataFinal || [])}
          />
        </div>
      </div>
    </TableStyle>
  )
}
