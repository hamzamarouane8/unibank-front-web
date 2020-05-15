import React, {createContext} from 'react'
import {ThemeProvider} from 'styled-components';

export const ThemeStyledProvider = ({children, theme}) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

