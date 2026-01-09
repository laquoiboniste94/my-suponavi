import ButtonLink from '../ButtonLink/buttonlink';
import NewsList from '../NewsList/newslist';
import styles from '../MainpageLayout/mainpagelayout.module.css';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';

export default async function Mainpage() {

  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">ニュース一覧へ </ButtonLink>
        </div>
    </>
  );
}
