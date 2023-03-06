import { useEffect } from 'react'
import { useHref, useNavigate } from 'react-router-dom'

import cart from '../../assets/images/cart.svg'

import styles from './Cart.module.css'

const Cart = () => {

    let url = useHref()
    let navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('username') && url == ('/cart')) {
            navigate('/')
        }
    })

    return (
        <>
            <button className={styles.button} disabled>Purchase</button>
            <img className={styles.img} src={cart} alt="корзина" />
            <p className={styles.p}>Cart empty...</p>
        </>
    )
}
export default Cart