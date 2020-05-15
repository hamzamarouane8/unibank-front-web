import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { IcClose } from '@sgabskit/icons';
import Slide from '@material-ui/core/Slide';
import { Row, Col } from '@sgabskit/layout';
import Link from '@sgabskit/link';

import { StyledDialog, StyledDialogTitle } from '../styles';


const FullScreenDialogTitle = ({ title, onClose }) => (
  <StyledDialogTitle>
    <Row>
      <Col md={8}>
        <div className="rk rk-dialog-title">{title}</div>
      </Col>
      <Col md={4} className="text-right">
        <Link onClick={onClose} style={{ float: 'right', marginTop: -8 }}><IcClose large/></Link>
      </Col>
    </Row>
  </StyledDialogTitle>
);

const SimpleDialogTitle = ({ title }) => (
  <DialogTitle>
    {title}
  </DialogTitle>
);

const Transition = (props) => <Slide direction="up" {...props} />;

export default ({ fullScreen, children, isOpen, okText, cancelText, title, onClose, width, onConfirm }) => (
  <StyledDialog className={fullScreen ? 'full-screen' : 'no-full-screen'}
                onClose={onClose}
                open={isOpen}
                fullScreen={fullScreen}
                TransitionComponent={Transition}>

    {title && fullScreen && <FullScreenDialogTitle title={title} onClose={onClose}/>}
    {title && !fullScreen && <SimpleDialogTitle title={title}/>}
    <DialogContent className="rui rui-dialog-content" style={{ paddingBottom: 35, overflowY: 'initial' }}>
      <div style={{ width: width || (fullScreen ? null : 400) }} className="clearfix">
        {children}
      </div>
    </DialogContent>
    {(okText || cancelText) && (
      <DialogActions>
        <div style={{ padding: '0 8px 10px' }}>
          {cancelText && (<Button onClick={onClose} color={'secondary'}>{cancelText}</Button>)}
          {okText && (<Button onClick={onConfirm} color={'primary'}>{okText}</Button>)}
        </div>
      </DialogActions>
    )}
  </StyledDialog>
)
