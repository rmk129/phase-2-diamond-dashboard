import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white"
};

function NavBar() {
return (   

   <div>
        <header>
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{background: "darkblue"}}
            >Home</NavLink>
            <NavLink
                to="/addform"
                exact
                style={linkStyles}
                activeStyle={{background: "darkblue"}}
            >Add Form</NavLink>
            <NavLink
                to="/dashboard"
                exact
                style={linkStyles}
                activeStyle={{background: "darkblue"}}
            >Stock Dashboard</NavLink>
        </header>
    </div>


    )
}

export default NavBar;