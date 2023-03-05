import { useState } from 'react'

import vector from '../../assets/images/Vector.png'
import action from '../../assets/images/Action.png'

import styles from './Book-list.module.css'


import data from '../../services/books.json'

import BooksListItem from '../book-list-item/Book-list-item'


const BookList = () => {
    const [classNames, setClassNames] = useState(styles.dropDownContainer)

    const toggleClass = () => {
        if (classNames == styles.dropDownContainer) {
            setClassNames(styles.dropDownContainer + ' ' + styles.show)
        } else {
            setClassNames(styles.dropDownContainer)
        }

    }

    const elements = data.books.map(item => {
        const { id, ...itemProps } = item




        return (
            <BooksListItem
                key={id}
                {...itemProps}
            />
        )

    })


    return (


        <div className="content">
            <img src={action} alt="search" className={styles.searchImg} />
            <input type="search" className={styles.inputSearch} placeholder="Search" />

            <img src={vector}
                alt="dropdown"
                className={styles.dropDownImg}
                onClick={toggleClass} />
            <input type="number" className={styles.inputNumber} placeholder="Price" />

            <div className={classNames}>
                <ul>
                    <li>Всі</li>
                    <li>Дорожче 0 але дешевше 15$ </li>
                    <li>Дорожче 15$ але дешевше 30$ </li>
                    <li>Дорожче 30$</li>
                </ul>
            </div>


            <div className={'flex-container ' + styles.containerForBooks}>
                {elements}
            </div>


        </div >


    )
}

export default BookList