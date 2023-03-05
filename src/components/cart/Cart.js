import cart from '../../assets/images/cart.svg'

import styles from './Cart.module.css'

const Cart = () => {
    return (
        <>
            <button className={styles.button} disabled>Purchase</button>
            <img className={styles.img} src={cart} alt="корзина" />
            <p className={styles.p}>Cart empty...</p>
        </>
    )
}
export default Cart