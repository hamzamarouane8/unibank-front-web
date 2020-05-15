import React from 'react';
import {DateInput} from '@blueprintjs/datetime';
import {Dates} from '@sgabskit/commons';
import moment from 'moment';

import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import styled from "styled-components";

export default ({placeholder, name, className, value, onBlur, onChange}) => {


  const jsDateFormatter = {
    formatDate: date => Dates.format(date),
    parseDate: str => Dates.parse(str),
  };

  //const dValue = Dates.parse(value);
  const dValue = moment(value, 'YYYY/MM/DD').toDate()
  return (
    <DateInputStyled name={name}
                     value={dValue}
                     showActionsBar
                     inputProps={{leftIcon: "calendar"}}
                     className={className}
                     disabled={true}
                     //defaultValue={value}
                     canClearSelection
                     placeholder={placeholder}
                     clearButtonText="Effacer"
                     closeOnSelection
                     minDate={Dates.minusMonth(3)}
                     maxDate={Dates.plusYears(2)}
                     locale="fr"
                     onChange={(selectedDate) => {
                       onChange({target: {name, value: Dates.valueOf(selectedDate)}});
                     }}
                     onBlur={onBlur} {...jsDateFormatter} />
  );
}
const DateInputStyled = styled(DateInput)`
  .bp3-input-group input{
    background:none;
    border:none;
    border-bottom: 1px solid #e1dfe4;
    width:100%;
  }
`;
