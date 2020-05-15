import React from 'react';
import { Tab } from 'semantic-ui-react';

export default({panes ,className})=>{
  return(
    <div className={className}>
    <Tab menu={{ secondary: true }} panes={panes}/>
    </div>);
}
