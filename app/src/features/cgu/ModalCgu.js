import React, {Component} from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import uuidv1 from 'uuid/v1'
import {Redirect} from 'react-router-dom';
import {UUID} from '@sgabskit/commons';


const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

const assets = {
  icon: require('../../assets/img/icon_cgu.svg')
}

class SimpleModal extends React.Component {

  state = {
    disabled: true,
    redirect: false,

  }

  componentDidMount() {
      setTimeout(() => {
        var elem1 = document.getElementById("text-area");
        elem1.addEventListener('scroll', this.handleScroll)
      },2000)


  }

  handleScroll = () => {
    const wrappedElement = document.getElementById('text-area');
    if (wrappedElement.scrollHeight - wrappedElement.scrollTop === wrappedElement.clientHeight) {
      this.handleScr();
      document.removeEventListener('scroll', this.trackScrolling);
    }
  }

  handleScr = () => {
    this.setState({disabled: false});
  }

  getDynamicContent() {
    return {
      __html: `${this.props.content ? this.props.content : ''}`
    };
  }

  acceptCGU(user) {
    this.props.cguServices.acceptCgu(this.props.version).then((data)=>{
      this.setState({redirect: true})
    })
    /*this.props.cguServices.confirmNewDevice().then((data) => {
      this.setState({redirect: true})
      let userId = UUID.create();
      //store.set('session_username' + userId, Buffer.from(user).toString('base64'));
    })*/
  }

  render() {
    const {classes, user} = this.props;
    if (this.state.redirect) {
      return <Redirect to='/'/>;
    }

    return (
      <>
        <CardStyle
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={true}
          onClose={false}>
          <div className={classes.paper}>
            <div id="container">
              <div id="popupCgu">
                <div className="content">
                  <div className="modal-header">
                    <div className="modal-title" style={{}}><img src={assets.icon} alt=""/><span>conditions générales d'utilisation</span>
                    </div>
                    <div className="modal-sub">version 1.0</div>
                  </div>
                  <div
                    id="text-area"
                    style={{overflow:'auto'}}
                    className="modal-text"
                    ref={el => this.dynamicContentElement = el}
                    dangerouslySetInnerHTML={this.getDynamicContent()}
                  />
                  <button disabled={this.state.disabled} className="action-submit"
                          onClick={() => this.acceptCGU(user)}>accepter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </CardStyle>
      </>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
export const CardStyle = styled(Modal)`
    .SimpleModal-paper-1{
      width:500px;
      height:600px;
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
      border-radius:5px;
      }
    .content{
      width: 100%;
    }
   
    .modal-title{
        font-size:20px;
        font-family:Montserrat-Bold;
        text-transform:uppercase;
        img{
          width:50px;
          height:50px;
          float: left;
          clear: none;
          margin-right:16px;
          margin-top:5px;
        }
    }
    
    .modal-text{
        width: 100%;
        height:400px;
    }
    
    .action-submit{
        color:#fff;
        float: right ;
        border:none ;
        padding:10px 20px;
        background:#e9041e ;
        text-transform: uppercase;
        border-radius:3px ;
        margin-top:20px ;
    }
    
    button:disabled,
    button[disabled]{
        color:#fff;
        border:none ;
        padding:10px 20px;
        background:#ebebeb ;
        text-transform: uppercase;
        border-radius:3px ;
        margin-top:20px ;
    }
    @media (max-width: 425px) {
  .SimpleModal-paper-1{
      width:350px;
      height:600px;
      top:50%;
      left:50%;
      padding:5px;
      transform: translate(-50%, -50%);
      border-radius:5px;
      }
      .modal-sub{
      visibility:hidden;
      }
      .modal-text{
        width: 100%;
        height:400px;
    }
    .action-submit{
        float: none ;
        margin-top:20px ;
        margin-left:15px;
        width:92%;
    }
    button:disabled,
   
    .modal-title{
        font-size:14px;
        font-family:Montserrat-Bold;
        text-transform:uppercase;
        img{
          width:40px;
          height:40px;
         
          margin-top:5px;
        }
    }
  }
`
