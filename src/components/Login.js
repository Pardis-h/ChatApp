import React from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase';

// Images
import google from '../assets/google.png';

//Styles
import styles from './Login.module.css'

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Wellcome to PasChat!</h2>
                <div 
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider() ) }
                    className={styles.button}>
                    <img src={google} alt='google' />
                    <span>Sign In With Google</span>
                </div>
            </div>
        </div>
    );
};

export default Login;
