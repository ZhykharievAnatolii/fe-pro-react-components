import React from "react";
import PropTypes from "prop-types";

const Nav = ({info: {href, text}}) => {
    return (               
            <li className="nav-list__item">
                <a href={href}>{text}</a>
            </li>           
    )
};

Nav.propTypes = {
	children: PropTypes.node,
	link: PropTypes.string
}

export default Nav;