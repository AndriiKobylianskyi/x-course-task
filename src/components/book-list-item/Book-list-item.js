import { useState } from 'react'
import { useHref, NavLink } from 'react-router-dom'

import notFoundImage from '../../assets/images/imageNotFound.png'

import styles from './Book-list-item.module.css'


import data from '../../services/books.json'


const BooksListItem = (props) => {
    let url = useHref()
    let [count, setCount] = useState('')

    if (+count > 42) {
        setCount(42)
    } else if (count.value === '') {
        setCount('')
    }
    else if (+count <= 0) {
        count = 1
    }

    let { author, price, image, title, shortDescription } = data.books[url.slice(10) - 1]
    if (!image) {
        image = notFoundImage

    }

    if (title.length > 24) {
        title = `${title.slice(0, 24)} ...`

    }
    return (
        <div div className="content" >
            <div className={styles.pbt5 + ` flex-container`}>
                <div>
                    <img src={image} alt="book" className={styles.book__image} />
                    <div className={styles.book__description}>Book description: {shortDescription}</div>
                </div>
                <div className={styles.book__info}>
                    <p className={styles.book__name + " " + styles.mt4}>Book name: {title}</p>
                    <p className={styles.book__author + " " + styles.mt4}>Book autor: {author}</p>
                </div>
                <div className={styles.blockForPrice}>
                    <div className={styles.book__price}>Price <span className={styles.book__priceSpan}>{price}$ </span></div>
                    <div className={styles.conteinerForPrice}>
                        <label htmlFor="counterForPrice" className={styles.label}>Count</label>
                        <input
                            type="number"
                            className={styles.countInput}
                            id="counterForPrice"
                            placeholder='0'
                            onChange={(e) => setCount(e.target.value)} value={count} />
                    </div>
                    <div className={styles.totalPrice}>Total price <span className={styles.totalPriceSpan}>{(price * count).toFixed(2)}$</span></div>
                    <button className={styles.addButton}>Add to cart</button>
                </div>

                <NavLink to='/booklist'>
                    <button className={styles.addButton} style={{ top: '490px' }}>Go to all</button>
                </NavLink>
            </div>
        </div >



    )
}

export default BooksListItem