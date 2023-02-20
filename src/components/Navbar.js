import React from 'react';

// Styles
import styles from './Navbar.module.css'

const Navbar = ({logoutHandler}) => {
    return (
        <div className={styles.navbar}>
            <h1>PasChat</h1>
            <div onClick={logoutHandler}>Logout</div>
        </div>
    );
};

export default Navbar;