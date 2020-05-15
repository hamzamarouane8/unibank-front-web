import React from 'react';
import { Search } from 'semantic-ui-react';
import { Sizes } from '@sgabskit/constants';

export default ({ name, fluid, size, width, className, onChange, onBlur, type, value, loading, description, placeholder }) => {

  let _size = null;
  if (_size === Sizes.XS) {
    _size = 'mini';
  }

  return (
    <Search
      className={className}
      name={name}
      fluid={fluid}
      onChange={(evt) => {
        evt.preventDefault();
        onChange(evt);
      }}
      onBlur={onBlur}
      size={_size}
      type={type}
      style={{width}}
      value={value || ''}
      loading={loading}
      description={description}
      placeholder={placeholder}
    />
  );
}
