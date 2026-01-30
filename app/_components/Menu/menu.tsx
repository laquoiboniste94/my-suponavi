"use client";

import Link from "next/link";
import styles from '../Menu/menu.module.css';
import Image from "next/image";
import { useEffect, useState } from "react";
import cx from "classnames";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";


const hamburger = "./menu.svg";
const closeB = "./close.svg";

export default function Menu() {
  
    const [isOpen, setIsOpen ] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(false), 0);
        return () => clearTimeout(timer);
    }, [pathname]);
    

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <div>
            <nav className={cx(styles.nav, isOpen && styles.open)}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <Link href='/news'>ニュース一覧へ</Link>
                    </li>
                     <li className={styles.item}>
                        <Link href='/leagues'>主要リーグ紹介</Link>
                    </li>
                     <li className={styles.item}>
                        <Link href='/contact'>会員登録</Link>
                    </li>
                </ul>
            </nav>
            <button className={cx(styles.ebutton, isOpen && styles.ebOn)} onClick={close}>
                <Image src={closeB} alt="閉じる"
                        width={24} height={24} priority />
            </button>
            <button className={cx(styles.hbutton, !isOpen && styles.hbOn)} onClick={open}>
                <Image src={hamburger} alt="メニュー" width={24} height={24} />
            </button>
        </div>
    );
}

