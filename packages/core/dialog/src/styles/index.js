import styled from 'styled-components';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiDialog from '@material-ui/core/Dialog/Dialog';

export const StyledDialogTitle = styled(DialogTitle)`
  background: #1F232A;
  vertical-align: center;
  margin-bottom: 0 !important;
  padding-top: 18px;
  padding-bottom: 16px;

  &, * {
    color: #FFF;
  }
  
  h2 {
    margin: 5px 0 0 0 !important; 
    font-weight: 500;
  }
`;


export const StyledDialog = styled(MuiDialog)`

  &.no-full-screen{
  
    &, .MuiDialog-paper-5, .MuiDialogContent-root-83 {
      overflow: visible !important;
      overflow-y: initial;
    }
  }
  
  &.full-screen {
    
  
    & > div, & > div > div, .MuiDialog-container-4, .MuiDialog-scrollPaper-2 {
      background-color: #F5F7FC !important;
    }
  
    .MuiDialogTitle-root-46 {
      position: static;
      left: 0;
      right: 0;
      top: 0;
      z-index: 100;
    }
    
    .rui-dialog-content {
      position: relative !important;;
      display: block !important;;
      padding: 50px !important;
      flex: none !important;
    }
    
  }
  
  &, .MuiDialog-paper-71 {
    overflow-y: none;
  }

  &, .MuiModal-root-15 {
    z-index: 700 !important;
  }
`;


