import React, {useEffect, useState} from 'react';
import {Col, Row} from "reactstrap";
import {ChartBar, ChartLine} from "../../features/accounts";
import CarouselAccounts from '../../features/accounts/components/CarouselAccounts'
import {DashboardStyle} from './styles/dashboard'
import TableOperations from '../../features/accounts/components/TableOperations'
import isEmpty from 'lodash.isempty';
import Tab from '../../components/tab'
import get from 'lodash.get'
import ErrorState from '../../features/error/ErrorState';
import {TableStyle} from "../../assets/styles/table";
import Commons from '../../components/commons/Commons';
import Loader from '../../components/Loader'
//---------------------------------------------------------------------


const messageAnalytics = {
  chartLine: {
    title: 'Solde'
  },
  chartBar: {
    title: 'Gain & Depenses'
  }
}

const filter = (list, type, flag) => {
  return list.filter((it) => it.sign === type).map((it) => flag ? it.balanceMonth : it.amount)
}

export default ({accountsService}) => {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [content, setContent] = useState(null);
  const [error, setError] = useState(false); // Error API call

  useEffect(() => {
    let listAccounts = [];
    accountsService.loadAccounts().then((data) => {
      const requests = (data.accounts || []).map((account, index) => {
        return accountsService.loadAccountDetails('16111904344').then((data) => {
          listAccounts.push({...data.data, id: index,realTimeBalance: account.realTimeBalance,upcomingBalance:account.upcomingBalance });
        }).catch((error) => {
          setError(true);
        })
      });
      // Wait for all requests, and then
      Promise.all(requests).then(() => {
        setAccounts(listAccounts);
        selectedAccount(listAccounts[0])
      });
    }).catch((error) => {
      setError(true);
    })
  }, []);

  const selectedAccount = (account) => {
    accountsService.loadAccountTransactions('123').then((data) => {
      setLoading(false);
      setActiveItem(account);
      setTransactions(data.data.transactions)
      updateChartsData(account, transactions)
    }).catch((error) => {
      setError(true);
    })
  }

  const updateChartsData = (account, transactions) => {

    const chartDataMonths = filter(account.balances, 'earning_funds', true);
    const chartDataGain = filter(account.balances, 'earning_funds', false);
    const chartDataSpending = filter(account.balances, 'spending_funds', false);
    const chartSoldeDataMonths = filter(account.balances, 'balance', true);
    const chartDataSolde = filter(account.balances, 'balance', false);

    setContent({
      chartGain: {
        category: Commons.monthNumToName(chartDataMonths,true),
        series: [{name: 'Gain', data: chartDataGain}, {name: 'Depense', data: chartDataSpending}]
      },
      chartSolde: {
        category: Commons.monthNumToName(chartSoldeDataMonths,false),
        series: [{name: 'Solde', type: 'column', data: chartDataSolde}, {
          name: 'Solde',
          type: 'line',
          data: chartDataSolde
        },
          {type: 'column', data: [-1000, -2500, -960]}]

      }
    })
    setLoading(false);
  }


  return (
    <>
      {
        loading ? (<div style={{marginTop:'100px'}}><Loader active inline='centered' /></div>):(<ErrorState status={error}>
          <DashboardStyle>
            <div className="Container">
              {!isEmpty(accounts) &&
              <CarouselAccounts
                laoding={loading}
                list={accounts}
                selectedAccount={selectedAccount}
              />}
              <>
                <div className="chart-contaienr">
                  <div className="widget-title">
                    Etat de mes comptes
                  </div>
                  <Row>
                    <Col md={5} className='d-none d-lg-block'>
                      <ChartGainAndDepenses data={content}/>
                    </Col>

                    <Col md={7} className='d-none d-lg-block'>
                      <ChartSolde data={content}/>
                    </Col>
                  </Row>
                  <Row className='d-lg-none'>
                    <Col md={12}>
                      <TabCharts content={content}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {!isEmpty(transactions) &&
                      <TableOperations data={transactions}
                      />}
                    </Col>
                  </Row>
                </div>
              </>

            </div>
          </DashboardStyle>
        </ErrorState>)
      }
    </>


  )
}


const TabCharts = ({content}) => {
  const panes = [
    {menuItem: 'Gains & depenses', render: () => <ChartGainAndDepenses data={content}/>},
    {menuItem: 'solde', render: () => <ChartSolde data={content}/>,}
  ]
  return <Tab panes={panes} className="sg-tab-chart"/>
}

const ChartGainAndDepenses = ({data}) => (
  <ChartBar categories={get(data, 'chartGain.category')}
            series={get(data, 'chartGain.series')} type='bar'
            title="Gain & Depenses"/>
)


const ChartSolde = ({data}) => (
  <ChartLine categories={get(data, 'chartSolde.category')}
             series={get(data, 'chartSolde.series')}
             type='line' title="Solde"/>
)
