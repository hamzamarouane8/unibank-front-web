import React from 'react';

import classNames from 'classnames';

export const Container = ({ children, style, fluid, className }) => (
  <div style={style} className={classNames(className, { 'container-fluid': fluid, 'container': !fluid })}>
    {children}
  </div>
);

export const Row = ({ style, children, className }) => (
  <div style={style} className={classNames('row', className)}>
    {children}
  </div>
);

export const Col = ({ style, md, span, offset, children, className }) => {
  let _span = span || md;
  if (!_span) {
    _span = 12 - (offset || 0) * 2;
  }
  return (
    <div style={style} className={classNames(className, { [`col-${_span}`]: _span, [`offset-${offset}`]: offset })}>
      {children}
    </div>
  );
};
