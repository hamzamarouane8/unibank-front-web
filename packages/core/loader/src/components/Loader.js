import React from 'react'
import {Dimmer, Loader, Segment} from 'semantic-ui-react'
// import 'semantic-ui-css/components/loader.css'
// import 'semantic-ui-css/components/segment.css'
// import 'semantic-ui-css/components/dimmer.css'

export default ({text, children, loading}) => (
  <Segment basic style={{padding: 0, margin: 0}}>
    <Dimmer inverted active={loading}>
      <Loader>
        <small>{text || 'Chargement des données en cours...'}</small>
      </Loader>
    </Dimmer>
    {children}
  </Segment>
)
