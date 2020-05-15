import React from 'react'
import ContentLoader from "react-content-loader"

export default ({height, children}) => (
  <ContentLoader height={height} speed={2} primaryColor="#f3f3f3" secondaryColor="#ecebeb">
    {children}
  </ContentLoader>
)

