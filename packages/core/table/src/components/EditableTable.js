import React from 'react';
import Table from './Table';
import { PopoverMenu } from '@sgabskit/popover';
import { IcMoreVertical, IcEdit, IcTrash } from '@sgabskit/icons';
import { Sizes } from '@sgabskit/constants';

export default ({ schema, columns, onEdit, onRemove, data, ...props }) => React.useMemo(() => {
  const _columns = columns.concat([
    {
      key: '______actions', align: 'center', width: 1, render: ({ record, id }) => (
        <PopoverMenu items={[
          { text: 'Modifier', endIcon: <IcEdit/>, onClick: () => onEdit(record) },
          '-',
          { text: 'Supprimer', endIcon: <IcTrash/>, onClick: () => onRemove(id) },
        ]}>
          <IcMoreVertical size={Sizes.XS}/>
        </PopoverMenu>
      ),
    },
  ]);
  return (<Table {...props} data={data} columns={_columns}/>);
}, [columns, data])
