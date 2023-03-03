import book from '../../books/websocket.jpg'

import './specific-book.scss';
import '../../globalStyle.scss'

const SpecificBook = () => {
    return (
        <main className="main">
            <div className="content-container">
                <div className="flex-container pbt-7 alignFS">
                    <div>
                        <img src={book} alt="book" className="book__image" width="350"
                            height="350" />
                        <div className="book__description mt-2">Book description</div>
                    </div>
                    <div className="book__info">
                        <p className="book__name">Book name</p>
                        <p className="book__autor mt-4">Book autor</p>
                        <p className="book__level mt-4">Book level</p>
                        <p className="book__tags mt-4">Book tags</p>
                    </div>
                    <div className="blockForPrice">
                        <div className="book__price">Price, $ <span>17</span></div>
                        <div className="counterForPrice">
                            <label for="counterForPrice">Count</label>
                            <input type="number" className="countInput" id="counterForPrice" value=" " />
                        </div>
                        <div className="totalPrice">Total price <span>51</span></div>
                        <button className="addButton">Add to cart</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SpecificBook