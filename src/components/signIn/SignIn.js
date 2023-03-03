import signImg from '../../images/signImg.png'
import avatarBig from '../../images/avatarBig.png'

import './signIn.scss';
import '../../globalStyle.scss'

const SignIn = () => {
    return (
        <main className="main">
            <div className="content-container">
                <div className="flex-container pbt-4">
                    <div>
                        <img src={signImg} alt="books" width="795" height="700" className="main__booksImage" />
                    </div>
                    <div className="signContainer">
                        <img src={avatarBig} alt="avatar" className="main__avatar" />
                        <p className="username">username</p>
                        <input type="text" className="main__input" placeholder="Type username" />

                    </div>
                </div>
            </div>

        </main>
    )
}
export default SignIn