import Image from "next/image";
import styles from '../SubHero/subhero.module.css';

type Props = {
    pageTitle: string;
    pageSub: string;
};
const pagePic = '/anfield.jpg';

export default function Subhero({ pageTitle, pageSub}: Props) {
    return (
        <section className={styles.container}>
            <div>
                <h1 className={styles.title}>{pageTitle}</h1>
                <p className={styles.sub}>{pageSub}</p>
            </div>
            <Image  className={styles.bgimg} src={pagePic} alt=""
                    width={1200} height={796} />
        </section>
    );
}