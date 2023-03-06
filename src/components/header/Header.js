import cart from '../../assets/images/cart.svg'
import myPhoto from '../../assets/images/myPhoto.jpg'
import { Link, useHref } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
    let elements = null
    let url = useHref()


    if ((url !== '/' && url !== '/x-course-task/') || (url !== '/' && url !== '/x-course-task')) {
        elements = (
            <div className="flex-container w700">
                <Link to='/cart'><img src={cart} alt="cart" width="30" height="30" /></Link>
                <img src={myPhoto} alt="" className={styles.avatar} width="60" height="60" />
                <p className={styles.username}>Andrii Kobylyanskyi</p>
                <Link to='/'><button className={styles.button}
                    onClick={() => localStorage.clear()}>sign out</button></Link>
            </div>
        )
    } else {
        elements = null
    }


    return (

        <div className="content flex-container">
            <div className=""><Link to="/" className={styles.logo}>bookbuy</Link></div>
            {elements}
        </div>



    )
}

export default Header