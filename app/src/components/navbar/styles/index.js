import styled from "react-emotion";

export default styled('div')`
  .navbar {
    background: #FFF;
    padding: 12px 60px 12px 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    z-index: 100;
  }
  .navbar-nav .nav-item {
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 0.9em;
    .nav-link {
      height: 36px;
    }
  }
  .sg-notification{
    img{
      width:20px; 
    }
  }
  .sg-logout{
    
    img{
      margin-left:6px;
        width:40px; 
    }
  }
  .nav-item{
    width:40px;
    .sg-avatar-user{
      img{
        margin-top:-3px;
        margin-right:6px;
        width:30px!important; 
      }
    }
    .sg-notification{
      img{
        width:20px; 
      }
    }
  }
`

