import cart from '../../assets/images/cart.svg'
import myPhoto from '../../assets/images/myPhoto.jpg'


import styles from './Header.module.css';

const Header = () => {
    let elements = null

    if (window.location.href === 'http://localhost:3000/') {
        elements = (
            <div className="flex-container w700">
                <img src={cart} alt="cart" width="30" height="30" />
                <img src={myPhoto} alt="" className={styles.avatar} width="60" height="60" />
                <p className={styles.username}>Andrii Kobylyanskyi</p>
                <button className={styles.button}>sign out</button>
            </div>
        )
    } else {
        elements = null
    }


    return (

        <div className="content flex-container">

            <div className=""><a href="#" className={styles.logo}>bookbuy</a></div>
            {elements}
        </div>



    )
}

export default Header