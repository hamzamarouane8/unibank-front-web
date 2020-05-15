import React from 'react';

export default ({ p, mt, pr, pl, mb, pt, pb, children }) => (
  <div className="clearfix" style={{
    paddingLeft: pl || p,
    paddingRight: pr || p,
    paddingTop: pt || p,
    paddingBottom: pb || p,
    marginTop: mt,
    marginBottom: mb,
  }}>
    {children}
  </div>
)
