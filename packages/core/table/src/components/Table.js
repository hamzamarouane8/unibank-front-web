import React from 'react';
import { Table } from 'semantic-ui-react';
import get from 'lodash.get';
import isEmpty from 'lodash.isempty';
import isString from 'lodash.isstring';
import compact from 'lodash.compact';
import styled from 'styled-components';
import { Dates, Numbers } from '@sgabskit/commons';
import { Text } from '@sgabskit/text';
import Loader from '@sgabskit/loader';
// import 'semantic-ui-css/components/table.css';

const EmptyMessage = ({ content }) => {
  if (content) {
    return isString(content) ? <Text>{content}</Text> : content;
  }
  return (<Text>Aucune donnée trouvée.</Text>);
};

const Cell = ({ col, record, id, index }) => {
  let value = get(record, col.name) || '';

  if (col.render) {
    const v = col.name ? col.render(value, { record, id, index }) : col.render({ record, id, index });
    if (isString(v)) return v.trim();
    return v;
  }

  if (col.icon) {
    return (
      <div  className="text-center pull-left" style={{ marginTop: -2 }}>
        {col.icon}
      </div>
    );
  }

  if (col.type === 'date') {
    value = Dates.parse(value);
    value = Dates.format(new Date(value));
  } else if (col.type === 'number') {
    value = Numbers.format(value);
  }
  if (col.shortLine) {
    value =value.slice(0, col.slice)
  }

  return ((value || col.defaultValue || '') + ' ' + (col.suffix || '')).trim();
};

export default ({ idField, ds, columns, noHeaders, data, appearance, loading, emptyMessage }) => {

  if (!columns) return null;
  let cColumns = compact(columns);

  const __columns = (noHeaders !== true) && React.useMemo(() => {
    return (
      <Table.Header>
        <Table.Row>
          {cColumns.map((col, index) => (
            <Table.HeaderCell className={col.className ? col.className : ''} key={col.key || col.name || index} textAlign={col.align || 'left'}>
              {col.header}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
    );
  }, [columns]);

  const __body = React.useMemo(() => {
    return (
      <Table.Body>
        {(data || []).map((record, recordIndex) => {
          const recordId = get(record, idField || 'id') || recordIndex;
          return (
            <Table.Row key={recordId}>
              {cColumns.map((col) => (
                <Table.Cell
                  className={col.className ? col.className : ''}
                  width={col.width || (col.icon ? 1 : null)}
                            textAlign={col.alignCell || 'left'}
                            key={(col.key || col.name)}>
                  <div className={col.condition ? col.condition(recordId, record) : ''}>
                  <Cell col={col} record={record} id={recordId} index={recordIndex}/>
                  </div>
                </Table.Cell>
              ))}
            </Table.Row>
          );

        })}
      </Table.Body>
    );
  }, [data]);

  return (
    <RootStyle>
      <Loader loading={loading}>
        <Table className={[appearance, (noHeaders === true) ? 'no-headers' : ''].join(' ')} unstackable>
          {__columns}
          {__body}
        </Table>
        {(!loading && isEmpty(data)) && <EmptyMessage content={emptyMessage}/>}
      </Loader>
      <p>&nbsp;</p>
    </RootStyle>
  );
}

const RootStyle = styled.div`

  .ui.table {
    box-shadow: 0 0 1px rgba(67, 90, 111, 0.1), 0 2px 4px -2px rgba(67, 90, 111, 0.27);
    border: none;
    border-radius: 3px;
    
    &, th, td {
      border-radius: 0 !important;
    }

    th {
      background: #FFF;
      font-size: 1em;
      font-weight: 500;
      padding: 12px 20px !important;
      border-top: none;
      border-bottom: 1px solid #CCC;
    }

    th, td {
      &:last-child {
        border-right: none;
      }
    }
    
    td {
      font-size: 0.9em;
      border-bottom: 0;
      padding: 10px 20px !important;
    }
    
    &.large {

      th, td {
        padding: 20px 10px;
      }
      
      th {
        font-size: 0.9em;
      }
  
      td {
        font-size: 1.45em;
      }
    }
    
    &.no-headers {
      th, td {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
    }
  }

  
  

`;
