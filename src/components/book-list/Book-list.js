import book from '../../books/websocket.jpg'
import vector from '../../images/Vector.png'
import action from '../../images/Action.png'

import './book-list.scss';
import '../../globalStyle.scss'



const BookList = () => {
    return (

        <main className="main">
            <div className="content-container">
                <img src={action} alt="search" className="main__searchImg" />
                <input type="search" className="main__input main__input-search" placeholder="Search" />

                <img src={vector} alt="dropdown" className="main__dropDownImg" />
                <input type="number" className="main__input main__input-number" placeholder="Price" />

                <div className="main__dropDownContainer">
                    <ul>
                        <li>Всі</li>
                        <li>Дорожче 0 але дешевше 15$ </li>
                        <li>Дорожче 15$ але дешевше 30$ </li>
                        <li>Дорожче 30$</li>
                    </ul>
                </div>


                <div className="flex-container containerForBooks">

                    <div className="book"><img src={book} alt="картинка" class="book__image" />
                        <p class="book__name mt-1">andrew
                            <span>123543</span>
                        </p>
                        <p class="book__autor">PIPKA</p>
                        <button class="book__button">View</button>
                    </div>

                    <div className="book"><img src={book} alt="картинка" class="book__image" />
                        <p class="book__name mt-1">andrew
                            <span>123543</span>
                        </p>
                        <p class="book__autor">PIPKA</p>
                        <button class="book__button">View</button>
                    </div>

                    <div className="book"><img src={book} alt="картинка" class="book__image" />
                        <p class="book__name mt-1">andrew
                            <span>123543</span>
                        </p>
                        <p class="book__autor">PIPKA</p>
                        <button class="book__button">View</button>
                    </div>

                    <div className="book"><img src={book} alt="картинка" class="book__image" />
                        <p class="book__name mt-1">andrew
                            <span>PIPKA</span>
                        </p>
                        <p class="book__autor">PIPKA</p>
                        <button class="book__button">View</button>
                    </div>



                </div>


            </div>
        </main>

    )
}

export default BookList