import React from 'react'
import {Image} from 'semantic-ui-react'
//import 'semantic-ui-css/components/image.css'

export default ({src, size}) => (
  <Image src={src} size={size || 'tiny'} avatar verticalAlign='middle' />
)
