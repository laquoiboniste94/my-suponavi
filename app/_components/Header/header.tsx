import Image from "next/image";
import styles from '../Header/header.module.css';

const headerLogo = "/logo.svg";

export default function Header() {
    return (
        <header className={styles.header}>
             <a href="./" className={styles.logoLink}>
                <Image className={styles.logo} src={headerLogo} alt="SIMPLE"
                    width={348} height={133} priority />
             </a>
        </header>
    );
}