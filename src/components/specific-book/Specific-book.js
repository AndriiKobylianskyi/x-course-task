import book from '../../assets/books/websocket.jpg'

import styles from './Specific-book.module.css'

const SpecificBook = () => {
    return (

        <div className="content">
            <div className={styles.pbt5 + ` flex-container`}>
                <div>
                    <img src={book} alt="book" className={styles.book__image} />
                    <div className={styles.mt2}>Book description</div>
                </div>
                <div className={styles.book__info}>
                    <p className={styles.book__name + " " + styles.mt4}>Book name</p>
                    <p className={styles.avatar + " " + styles.mt4}>Book autor</p>
                    <p className={styles.mt4}>Book level</p>
                    <p className={styles.mt4}>Book tags</p>
                </div>
                <div className={styles.blockForPrice}>
                    <div className={styles.book__price}>Price, $ <span className={styles.book__priceSpan}>17</span></div>
                    <div className={styles.conteinerForPrice}>
                        <label for="counterForPrice" className={styles.label}>Count</label>
                        <input type="number" className={styles.countInput} id="counterForPrice" placeholder='0' />
                    </div>
                    <div className={styles.totalPrice}>Total price <span className={styles.totalPriceSpan}>51</span></div>
                    <button className={styles.addButton}>Add to cart</button>
                </div>
            </div>
        </div >

    )
}

export default SpecificBook