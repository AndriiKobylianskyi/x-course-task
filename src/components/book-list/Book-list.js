import { useState, useEffect } from 'react'
import { useHref, useNavigate, NavLink } from 'react-router-dom'

import vector from '../../assets/images/Vector.png'
import action from '../../assets/images/Action.png'
import notFoundImage from '../../assets/images/imageNotFound.png'

import styles from './Book-list.module.css'


import data from '../../services/books.json'




const BookList = () => {
    const [classNames, setClassNames] = useState(styles.dropDownContainer)




    let url = useHref()
    let navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('username') && url === ('/booklist')) {
            navigate('/')
        }
    })


    const toggleClass = () => {
        if (classNames === styles.dropDownContainer) {
            setClassNames(styles.dropDownContainer + ' ' + styles.show)
        } else {
            setClassNames(styles.dropDownContainer)
        }

    }

    function renderItems(arr) {
        const items = arr.map(item => {
            let { id, author, price, image, title } = item


            if (!image) {
                image = notFoundImage

            }

            if (title.length > 24) {
                title = `${title.slice(0, 24)} ...`

            }


            return (
                <div className={styles.book} key={id}>
                    <img src={image} alt="картинка" className={styles.book__img} />
                    <p className={styles.book__name}> name: {title}
                        <span span className={styles.book__price}>${price}</span>
                    </p>
                    <p className={styles.book__author}>Author: {author}</p>
                    <NavLink style={{ textDecoration: 'none' }} to={`/booklist/${id}`}><button className={styles.book__button}>View</button></NavLink>
                </div>


            )
        })

        return items
    }

    const items = renderItems(data.books)



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
                {items}
            </div>


        </div >


    )
}

export default BookList