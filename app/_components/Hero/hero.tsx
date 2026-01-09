import Image from "next/image";
import styles from '../Hero/hero.module.css';

type Props = {
    children: React.ReactNode;
    pageTitle: string;
    pageSub: string;
};
const pagePic = '/img-mv.jpg';

export default function Hero({children, pageTitle, pageSub}: Props) {
    return (
        <>
            <section className={styles.container}>
                <div>
                    <h1 className={styles.title}>{pageTitle}</h1>
                    <p className={styles.sub}>{pageSub}</p>
                </div>
                <Image  className={styles.bgimg} src={pagePic} alt=""
                    width={4000} height={1200} />
            </section>
            <div>{children}</div>
        </>  
    );
}
