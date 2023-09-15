import logo from '../images/logo.png'
import {Link } from 'react-router-dom';
import './header.css'

function Navbar(){
    return(
    <div>
        <header className='nav'> 
            <Link to='/'> <img  className='logo' src = {logo} alt ='logo'/> </Link>
           <div className='tabs'>
           <Link to='/'> <ul> Home </ul>  </Link>  
           <Link to='/PCED'> <ul> PCED </ul>  </Link>   
           <Link to='/Membership'> <ul> Membership </ul>  </Link>  
           <Link to='/Eboard'> <ul> Eboard </ul>  </Link>  
           <Link to='/Calendar'> <ul> Calendar </ul>  </Link>  
            </div>
  
           
        </header>
    </div>
    )
}

export default Navbar