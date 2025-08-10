import { Button } from '../Button/Button'
import styles from './Contact.module.css'
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { useState } from 'react';

export function ContactForm(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")


    const onSubmit = (event) => {

        event.preventDefault();

        setName(event.target[0].value)
        setEmail(event.target[1].value)
        setText(event.target[2].value)
    }

    return(
        <section className={styles.container}>

            <div className={styles.contactForm}>   

                <div className={styles.topButton}>
                    <Button text = "VIA CHAT SUPPORT" icon={<MdMessage fontSize="24px"/>}/>
                    <Button text = "VIA CALL" icon={<IoCall fontSize="24px"/>}/>
                </div>
                <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdMail/>}></Button>

                <form onSubmit={onSubmit} action="">
                    <div className={styles.formContainer}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name'/>
                    </div>
                    <div className={styles.formContainer}>
                        <label htmlFor="email">Mail</label>
                        <input type="email" name='email'/>
                    </div>
                    <div className={styles.formContainer}>
                        <label htmlFor="text">Text</label>
                        <textarea name='text' rows='8'/>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'end'}}>
                        <Button text = "SUBMIT"/>
                    </div>

                    <div>
                        {name + " " + email + " " + text}
                    </div>


                </form>

            </div>

            <div className={styles.contactImage}>
                <img src="./images/NA.jpg" alt="" />
            </div>

        </section>
    )
}