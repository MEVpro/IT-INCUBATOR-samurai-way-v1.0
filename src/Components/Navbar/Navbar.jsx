import React from 'react';
import classes from './Navbar.module.css';
export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href="src/Components/Navbar/Navbar#">Profile</a>
            </div>
            <div className={classes.item}>
                <a href="src/Components/Navbar/Navbar#">Massages</a>
            </div>
            <div className={classes.item}>
                <a href="src/Components/Navbar/Navbar#">News</a>
            </div>
            <div className={classes.item}>
                <a href="src/Components/Navbar/Navbar#">Music</a>
            </div>

            <div className={classes.item}>
                <a href="src/Components/Navbar/Navbar#">Profile</a>
            </div>
        </nav>
    )
}
