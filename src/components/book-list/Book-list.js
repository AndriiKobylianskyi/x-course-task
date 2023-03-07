

import { useState, useEffect } from 'react'
import { useHref, useNavigate, NavLink } from 'react-router-dom'

import vector from '../../assets/images/Vector.png'
import action from '../../assets/images/Action.png'
import notFoundImage from '../../assets/images/imageNotFound.png'

import styles from './Book-list.module.css'


import data from '../../services/books.json'




const BookList = () => {
    let [classNames, setClassNames] = useState(styles.dropDownContainer)
    let [searchValue, setSearchValue] = useState('')

    let [priceValue, setPriceValue] = useState('')
    let [filteredArray, setfilteredArray] = useState(data.books)


    let url = useHref()
    let navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('username') && url === ('/booklist')) {
            navigate('/')

        }




    })

    const priceFilter = (status) => {


        if (status > priceValue) {
            let newData = [...data.books].filter(item => item.price < status)
            setfilteredArray(newData)
        }

        if (status === 'Всі') {
            setfilteredArray(data.books)
        } else if (status === 'Дорожче 0 але дешевше 15$') {
            let newData = [...data.books].filter(item => item.price >= 0 && item.price < 15)
            setfilteredArray(newData)
        } else if (status === 'Дорожче 15$ але дешевше 30$') {
            let newData = [...data.books].filter(item => item.price > 15 && item.price < 30)
            setfilteredArray(newData)
        } else if (status === 'Дорожче 30$') {
            let newData = [...data.books].filter(item => item.price > 30)
            setfilteredArray(newData)
        }

    }

    const searchFilter = (status) => {

        if (status === searchValue + status[status.length - 1]) {

            let newData = [...data.books].filter(item => item.title.toLowerCase().includes(status.toLowerCase()))

            setfilteredArray(newData)
        }
    }


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

            if (title.length > 20) {
                title = `${title.slice(0, 20)} ...`

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

    const items = renderItems(filteredArray)

    const checkKey = (e) => {

        if (e.keyCode === 8) {
            let newData = [...data.books].filter(item => item.title.toLowerCase().includes(e.target.value.slice(0, e.target.value.length - 1).toLowerCase()))

            setfilteredArray(newData)


        }
    }






    return (


        <div className="content">
            <img src={action} alt="search" className={styles.searchImg} />
            <input
                type="search"
                className={styles.inputSearch}
                placeholder="Search"
                onChange={(e) => {
                    setSearchValue(e.target.value)
                    searchFilter(e.target.value)
                }}
                onKeyDown={checkKey}

            />

            <img src={vector}
                alt="dropdown"
                className={styles.dropDownImg}
                onClick={toggleClass} />
            <input
                type="number"
                className={styles.inputNumber}
                placeholder="Price"
                onChange={(e) => {
                    setPriceValue(e.target.value)
                    priceFilter(e.target.value)
                }}

            />

            <div className={classNames}>
                <ul>
                    <li onClick={() => priceFilter('Всі')}>Всі</li>
                    <li onClick={() => priceFilter('Дорожче 0 але дешевше 15$')}>Дорожче 0 але дешевше 15$ </li>
                    <li onClick={() => priceFilter('Дорожче 15$ але дешевше 30$')}>Дорожче 15$ але дешевше 30$ </li>
                    <li onClick={() => priceFilter('Дорожче 30$')}>Дорожче 30$</li>
                </ul>
            </div>


            <div className={'flex-container ' + styles.containerForBooks}>
                {items}
            </div>


        </div >


    )
}

export default BookList