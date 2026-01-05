import styles from '../Footer/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <a href='/news'>ニュース一覧へ</a>
                    </li>
                     <li className={styles.item}>
                        <a href='/leagues'>主要リーグ紹介</a>
                    </li>
                     <li className={styles.item}>
                        <a href='/contact'>お問い合わせ</a>
                    </li>
                </ul>
            </nav>
            <p className={styles.cr}>@ SIMPLE. All Rights Reserved 2024</p>
        </footer>
    );
}