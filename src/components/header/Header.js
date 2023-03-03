import cart from '../../images/cart.svg'
import myPhoto from '../../images/myPhoto.jpg'

import './header.scss';


const Header = () => {
    let elements = null

    if (window.location.href !== 'http://localhost:3000/') {
        elements = (
            <div className="flex-container">
                <img src={cart} alt="cart" className="header__cart" width="30" height="30" />
                <img src={myPhoto} alt="" className="header__avatar" width="60" height="60" />
                <p className="username">Andrii Kobylyanskyi</p>
                <button className="header__button">sign out</button>
            </div>
        )
    }


    return (
        <header className="header">
            <div className="content-container flex-container">

                <div className=""><a href="#" className="header__logo">bookbuy</a></div>
                {elements}
            </div>

        </header>

    )
}

export default Header