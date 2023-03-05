import signImg from '../../assets/images/signImg.png'
import avatarBig from '../../assets/images/avatarBig.png'

import styles from './SignIn.module.css';

const SignIn = () => {
    return (

        <div className="content">
            <div className="flex-container">
                <div>
                    <img src={signImg} alt="books" width="795" height="700" className={styles.img} />
                </div>
                <div className={styles.pr16}>
                    <img src={avatarBig} alt="avatar" className={styles.avatar} />
                    <p className={styles.username}>username</p>
                    <input type="text" className={styles.input} placeholder="Type username" />
                </div>
            </div>
        </div>


    )
}
export default SignIn