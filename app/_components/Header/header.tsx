import Image from "next/image";
import styles from '../Header/header.module.css';
import Link from "next/link";
import Menu from "../Menu/menu";

const headerLogo = "/static/logo.svg";

export default function Header() {
    return (
        <header className={styles.header}>
             <Link href="./" className={styles.logoLink}>
                <Image className={styles.logo} src={headerLogo} alt="SIMPLE"
                    width={348} height={133} priority />
             </Link>
             <Menu />
        </header>
    );
}