// @flow

import React from 'react';
import Spinner from '@sgabskit/spinner';
import Router from './Router';
import {Helmet} from "react-helmet";

export default ({id, config, routes, layout}) => {
console.log('app')
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoaded(true), 1200);
  }, []);

  if (!loaded) return <div className="text-center" style={{padding: 100}}><Spinner/></div>;

  return (
    <>
      <Helmet>
      </Helmet>
      <Router routes={routes} layout={layout} config={{...config, appId: id}}/>
    </>
  );
}
