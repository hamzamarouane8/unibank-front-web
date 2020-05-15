import React from 'react';
import Pane from '@sgabskit/pane';
import ValueChart from './ValueChart';
import LineChart from './LineChart';

export default ({ type, height, ...props }) => {

  let content = null;
  if (type === 'line') {
    content = <LineChart {...props} />;
  } else {
    content = <ValueChart {...props} />;
  }

  return (
    <Pane>
      <div className="clearfix" style={{ height: height || 150}}>
        {content}
      </div>
    </Pane>
  );
}

