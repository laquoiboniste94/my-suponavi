import styles from '../Sheet/sheet.module.css';
import Hero from '../Hero/hero';
import Subhero from '@/app/SubHero/subhero';


type Props = {
  children: React.ReactNode;
  pageTitle: string;     // ← 追加
  pageSub: string;       // ← 追加
};


export default function Sheet({ children, pageTitle, pageSub,}: Props) {
    return (
        <div>
            <Subhero pageTitle={pageTitle} pageSub={pageSub} />
            <div className={styles.container}>{children}</div>
        </div>
    );
}