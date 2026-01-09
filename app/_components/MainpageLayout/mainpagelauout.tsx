import ButtonLink from '../ButtonLink/buttonlink';
import NewsList from '../NewsList/newslist';
import { realData } from '../../_libs/NewsRealData';
import styles from '../MainpageLayout/mainpagelayout.module.css';


export default function Mainpage() {
  const sliceData = realData.dataList.contents.slice(0,3);

  return (
    <>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">ニュース一覧へ </ButtonLink>
        </div>
    </>
  );
}
