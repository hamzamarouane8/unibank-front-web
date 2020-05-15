import React, {Suspense} from 'react'
import Spinner from '@sgabskit/spinner'
import {Sizes} from '@sgabskit/constants'

export default ({children}) => (
  <Suspense fallback={<div><Spinner size={Sizes.SM}/></div>}>
    {children}
  </Suspense>
)

/*
const SpinnerStyled = styled.div`
  padding: 30px;
  text-align: center;
  display: block;
  width: 100%;
  * {
    margin: auto;
  }
`
*/
