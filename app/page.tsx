import styles from './page.module.css';
import Image from 'next/image';
import ButtonLink from './_components/ButtonLink/buttonlink';
import NewsList from './_components/NewsList/newslist';
import { realData } from './_libs/NewsRealData';

const topImage= '/img-mv.jpg';


export default function Home() {
  const sliceData = realData.dataList.contents.slice(0,3);

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>Number Web</h1>
          <h3 className={styles.subtitle}>海外サッカーのニュースをお届け</h3>
          <p className={styles.description}>最新ニュース一覧</p>
        </div>
        <Image className={styles.bgimg} src={topImage} alt=""
            width={4000} height={1200}/>
      </section>
      <section className={styles.news}> {/* ニュース欄全体のレイアウト担当 */}
        <h2 className={styles.newsTitle}>新着ニュース</h2> {/* 見出し文のスタイル担当 */}
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">ニュース一覧へ </ButtonLink>
        </div>
      </section>
    </>
  );
}
