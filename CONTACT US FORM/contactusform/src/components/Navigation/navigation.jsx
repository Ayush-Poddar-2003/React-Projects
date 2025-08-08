import styles from './navigation.module.css';

export function Navigation(){
    return(
        // for two classes
        <nav className={`${styles.navigation} container`}>

            <div className={styles.logo}>
                <img src="./images/logo.png" alt="logo"/>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    )
}