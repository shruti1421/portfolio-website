import React from 'react';
import { Link } from 'react-router-dom';


const NavbarContent = ({handleToggle}) => {
    return (
        <div>
             <span class="menu_toggle" onClick={handleToggle}  >
                  <i class="menu_open fa fa-bars fa-lg"></i>
                  <i class="menu_close fa fa-times fa-lg"></i>
              </span>
              <ul class="menu_items">
               <li><Link to="/" onClick={handleToggle}><i class="icon fa fa-user fa-2x"></i> About</Link></li>
               <li><Link to='/skills' onClick={handleToggle}><i class="icon fa fa-bar-chart fa-2x"></i> Skills</Link></li>
               <li><Link to="/projects" onClick={handleToggle}><i class="icon fa fa-laptop fa-2x"></i> Projects</Link></li>
              </ul>
        </div>
    )
}

export default NavbarContent;
