import styles from './Button.module.css'

export function Button({isOutline, icon, text, ...rest}){
    return (
        <button {...rest} 
        className={isOutline ? styles.secondaryButton : styles.primaryButton }>
            { icon }
            { text}
        </button>

    )
}