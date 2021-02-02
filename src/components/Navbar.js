import React, { useState } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Content  from './Content';
import  Skills  from './Skills';
import Projects from './Projects';
import NavbarContent from './NavbarContent';
import { Link, animateScroll as scroll  } from 'react-scroll';




const Navbar = () => {

    const [isActive, setIsActive] = useState(true);

    const handleToggle = () =>{
        setIsActive(!isActive);
        scroll.scrollToTop();
    }
    
    const removeNav = () =>{
        setIsActive(true);  
    }

    return (
        <Router>
        <div className = {isActive? "page":"shazam"}>
            <NavbarContent handleToggle={handleToggle} />
            <div  className = "content" onClick={removeNav}>
            <div className="running_man active" >
            < div className="textarea">
            <Switch>
              <Route exact path='/' component={Content} />
              <Route exact path='/skills' component={Skills} />
              <Route exact path='/projects' component={Projects} />
            </Switch>
            </div>
            </div>
            <figure className="main"></figure>
            </div>
        </div>
        </Router>
    )
}

export default Navbar;
