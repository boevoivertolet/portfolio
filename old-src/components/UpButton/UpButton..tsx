import styles from './UpButton.module.scss'

export const UpButton = () => {
    return (
        <a href="#top">
            <div className={styles.upButton}>
                <i className="fa-solid fa-arrow-up"></i>
            </div>
        </a>
    )
}
