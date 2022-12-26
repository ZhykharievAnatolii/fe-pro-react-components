import React from "react";

import NavItem from "./Nav";

const Header = () =>{
    return (
        <header className="header">
            <div className="container">
                <a href="/" className="logo">My logo</a>

                <nav>
                    <ul className="nav-list">      
                        <NavItem info={{href:'/', text:'Home'}}/>
                        <NavItem info={{href:'/#about', text:'About us'}}/>
                        <NavItem info={{href:'/#contact', text:'Contact us'}}/>
                        <NavItem info={{href:'/#help', text:'Help page'}}/>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;