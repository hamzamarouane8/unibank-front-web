import React from 'react';
import isEmpty from 'lodash/isEmpty'
import {Dropdown} from 'semantic-ui-react'

const DropdownDrop = ({items}) => {
  if (isEmpty(items)) return null
  return (items.map((item, id) => (
    <>
      <Dropdown.Item className={item.className} onClick={item.onClick}>{item.text}</Dropdown.Item>
      < Dropdown.Divider/>
    </>
  )))
}

export default ({dropdownItems, icon}) => (
  <Dropdown icon={icon} pointing className='link item'>
    <Dropdown.Menu>
      <DropdownDrop items={dropdownItems}/>
    </Dropdown.Menu>
  </Dropdown>
);


