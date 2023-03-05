import notFoundImage from '../../assets/images/imageNotFound.png'

import styles from './Book-list-item.module.css'

const BooksListItem = (props) => {
    let { author, price, image, title, description, shortDescription } = props
    if (!image) {
        image = notFoundImage

    }

    if (title.length > 24) {
        title = `${title.slice(0, 24)} ...`

    }

    return (<>
        <div className={styles.book}><img src={image} alt="картинка" className={styles.book__img} />
            <p className={styles.book__name}> name: {title}
                <span span className={styles.book__price}>${price}</span>
            </p>
            <p className={styles.book__author}>Author:{author}</p>
            <button className={styles.book__button}>View</button>
        </div>


    </>
    )
}

export default BooksListItem