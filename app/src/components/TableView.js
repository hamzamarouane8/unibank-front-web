import React, {useState} from 'react';
import {Insets} from '@sgabskit/layout';
import Table from '@sgabskit/table';
import {Pagination} from "semantic-ui-react";
import isEmpty from 'lodash.isempty'

// ------------------------------------------------------------------------------
//import DataExportPopoverMenu from './DataExportPopoverMenu';

export default ({dataList, todosPerPage, columns, emptyMessage}) => {
  const [_activePage, _setActivePage] = useState(1);


  const calculPaginationPages = () => {
    var count = dataList.length / todosPerPage;
    return count;
  }

  const handlePaginationChange = (e, {activePage}) => _setActivePage(activePage);

  const indexOfLastTodo = _activePage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  let currentTodos = dataList.slice(indexOfFirstTodo, indexOfLastTodo)
  return (
    <Insets ml={10}>
      <Table columns={columns}
             data={currentTodos}
             emptyMessage={emptyMessage}
             loading={dataList.loading}/>

      {!isEmpty(dataList) && dataList.length / todosPerPage > 1 && <div className="actions">
        <Pagination
          activePage={_activePage}
          onPageChange={handlePaginationChange}
          totalPages={calculPaginationPages()}
        />
      </div>}
    </Insets>
  );
}
