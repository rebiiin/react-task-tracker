//  import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import Button from './Button';


 const Header = ({title,onAdd, showAdd}) => {

 
const location = useLocation()
  

     return (
         <header className='header'>
             <h1>{title}</h1>
              {/* {this is Conditional Rendering && is then} */}
              {
              location.pathname === '/' && 

              <Button color={showAdd ? 'red':'green'} 
              text={showAdd ? 'Close':'Add'} 
              onClick={onAdd} />

              }
             
         </header>
     )
 }



   
 Header.defaultProps = {
    title: 'Task Tracker',
  }
  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }

// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
// }

 export default Header
 