import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import signImg from '../../assets/images/signImg.png'
import avatarBig from '../../assets/images/avatarBig.png'

import styles from './SignIn.module.css';

const SignIn = () => {

    let [userNameValue, setUserNameValue] = useState('')
    console.log(userNameValue)


    let logInButton = ''
    if ((userNameValue.length < 4 || userNameValue.length > 16) && userNameValue) {

        logInButton = <NavLink style={{
            textDecoration: 'none'
        }} to='/booklist'>
            <button
                className={styles.button}
                disabled>
                Log in
            </button></NavLink>
    }
    else if (userNameValue) {

        logInButton = <NavLink style={{ textDecoration: 'none' }} to='/booklist'><button
            className={styles.button}
            onClick={() => localStorage.setItem('username', userNameValue)}>Log in</button></NavLink>
    }
    else {
        logInButton = <button
            style={{
                color: '#808080',
                cursor: 'auto'
            }}
            className={styles.button}>Log in</button>
    }






    return (

        <div className="content">
            <div className="flex-container">
                <div>
                    <img src={signImg} alt="books" width="795" height="700" className={styles.img} />
                </div>
                <div className={styles.pr16}>
                    <img src={avatarBig} alt="avatar" className={styles.avatar} />
                    <p className={styles.username}>username</p>
                    <input type="text" className={styles.input} placeholder="Type username"
                        onChange={(e) => setUserNameValue(e.target.value)} value={userNameValue} />

                    {logInButton}
                </div>
            </div>
        </div>


    )
}
export default SignIn