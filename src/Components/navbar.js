import React from 'react'
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Logo from './UI/logo';



export default function Navbar() {
  
    

  return (
    <React.Fragment>
       <AppBar 
    position="static" style={{
      backgroundColor: '#F5F5F5',
      boxShadow: 'none',
      padding: '10px 0',
      borderBottom: '1px solid #C8CACE',
    }}>
      <Toolbar style={{display: 'flex'}}>
        <div style={{flexGrow:1}}>
          <div className="header_logo">
           <Logo 
             link={true}
             linkTo="/"
             width="70px"
             height="70px"
           />
          </div>

        </div>
                 <Link to="/">
                   <Button >Home</Button>
                  </Link>
                
                 <Link to="/about-us">
                 <Button >About Us</Button>
                   </Link>
                 
                 <Link to="/services">
                 <Button >Services</Button>
                   </Link>
                
                 <Link to="/our-works">
                 <Button >Our Works</Button>
                   </Link>
                 
                 <Link to="/our-customers">
                 <Button >Our Customers</Button>
                   </Link>
                 
                 <Link to="/news">
                 <Button >News</Button>
                   </Link>
                   
                   <Link to="/*">
                 <Button variant="contained" color="secondary">Contact us</Button>
                   </Link>
                

      </Toolbar>
    
    </AppBar>
    </React.Fragment>
   
    
  
  );
}

