import React, {useState, useEffect} from 'react';
import './Nav.css';
import logo from "../asset/Image/avatar.png"
import avatar2 from "../asset/Image/avatar2.png"
import { useHistory } from 'react-router-dom';


function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    // function responnsible for setting the values 
    const navBarTransition = () => {
        if (window.scrollY> 100) {
            handleShow(true);
        } else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", navBarTransition); 
        return () => window.removeEventListener("scroll", navBarTransition)
    }, [])


    return ( 
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__container">
                <img 
                src={logo} 
                alt=""
                onClick={() => history.push("/")}
                className="nav__logo" />

                <img 
                src={avatar2}
                alt=""
                onClick={() => history.push("/profile")}
                className="nav__avatar"
                 />
            
            </div>    
        </div>
        
    )
}

export default Nav
