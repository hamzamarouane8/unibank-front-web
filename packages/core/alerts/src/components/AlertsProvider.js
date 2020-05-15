import React, { useEffect } from 'react';
import { SnackbarProvider } from 'notistack';
import styled from 'styled-components';
import withAlert from '../hoc/withAlert';
import { GlobalEvents } from '@sgabskit/eventbus';

const GlobalAlerts = withAlert(({ reportError }) => {

  useEffect(() => {

    const subscription = GlobalEvents.subscribe('message', (payload) => {
      if (payload.error) {
        reportError(payload.error);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return null;
});

export default ({ maxMessages, children }) => {

  const defaultProps = {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
    maxSnack: maxMessages || 3,
  };

  return (
    <StyledSnackBarProvider {...defaultProps}>
      <>
        {children}
        <GlobalAlerts/>
      </>
    </StyledSnackBarProvider>
  );
}

const StyledSnackBarProvider = styled(SnackbarProvider)`
  .MuiTypography-root-52 {
    border-radius: 2px !important;
  }
  
  .SnackbarItem-message-14, .SnackbarItem-message-14 * {
    font-size: 1rem !important;
    font-weight: 300 !important;
    letter-spacing: 0.04em;
  }
  
`;
