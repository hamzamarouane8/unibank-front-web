import React from 'react';
import {Header} from 'semantic-ui-react'

export default {

   mapOptions :(data) => {
    return (data || []).map((item,index) => ({
      key: item.index,
      value: item.accountNumber,
      text: <Header content={item.accountType} subheader={item.accountNumber}/>,
      content: <Header content={item.accountType} subheader={item.accountNumber}/>
    }))
  },
   extractMonthFromDate : (value) => {
    return value.slice(5, 7)
  },
   chartFilter : (list, type, flag) => {
    return list.filter((it) => it.type === type).map((it) => flag ? this.extractMonthFromDate(it.balanceDate) : it.amount)
  },
   getLastThreeMonths : () => {
    var monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    var today = new Date();
    var last3Months = []

    for (var i = 0; i < 3; i++) {
      last3Months.push(monthNames[(today.getMonth() - i) - 1] + ' ' + today.getFullYear());
    }
    return [
      {id: 0, value: last3Months[2], label: last3Months[2], active: true},
      {id: 1, value: last3Months[1], label: last3Months[1], active: false},
      {id: 3, value: last3Months[0], label: last3Months[0], active: false}]
  },
  monthNumToName : (list,type) => {
    var monthNames = {'01':'Janvier', '02':'Février','03': 'Mars', '04':'Avril', '05':'Mai', '06':'Juin', '07':'Juillet', '08':'Août', '09':'Septembre', '10':'Octobre', '11':'Novembre', '12':'Décembre'};
    var monthNamesShort = {'01':'Jan', '02':'Fév','03': 'Mar', '04':'Avr', '05':'Mai', '06':'Juin', '07':'Juil', '08':'Août', '09':'Sep', '10':'Oct', '11':'Nov', '12':'Déc'};

    var months = []

    for (var i = 0; i < list.length; i++) {
      months.push(type ? monthNames[list[i]]:monthNamesShort[list[i]]);
    }
    return months
  },
  getCenterCountry:(code)=>{
     let countries =[
       {code:'SN',center:{lat:14.745086,lng:-17.046579}},
       {code:'MDG',center:{lat:-23.348629,lng:43.677641}},
       {code:'BFA',center:{lat:12.371530,lng:-1.519920}},
     ]
    let centerCountry = countries.find((item)=>item.code===code)
    return centerCountry;

  },
   dateFormat :(date)=>{
    let dateFinal = date.slice(0,10);
    dateFinal = dateFinal.split("-").reverse().join("/");
    return dateFinal
  }

};
