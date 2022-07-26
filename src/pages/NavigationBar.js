import './NavigationBar.css';
import {Link} from 'react-router-dom';

function NavigationBar(props){
    return(<div className='navigation'> 
        <div className='navigationBar'>
        {/* <a href='/' style={{textDecoration:"none",fontSize:"20px", padding:"10px"}}>
            <h1 style={{paddingLeft:"20px",margin:"0px"}}>
            Divya's Portfolio
        </h1>
        </a> */}
        <Link style={{textDecoration:"none",fontSize:"17px", padding:"0 0 0 30px", margin:"0px"}} to='/'>
            <h1 >
                Divya's Portfolio
                </h1> 
        </Link>
        <div className='rightSide'>
        <ul>
            <li> 
                {/* <a href="/project"> */}
                {/* </a> */}
                <Link to='/project'>
                Project
                </Link>
            </li>
            <li>
                {/* <a href="/about">
                    About
                </a> */}
                <Link to='/about'>
                    About
                </Link>
            </li>
            </ul>
            </div>
        </div>
    </div>); 

}
export default NavigationBar;