import styles from './not-found.module.css';
import Hero from './_components/Hero/hero';
import ButtonLink from './_components/ButtonLink/buttonlink';

export default function NotFound() {
  return (
    <div>
        <Hero pageTitle='404 Error' pageSub='ページが見つかりません' />
        <dl className={styles.container}>
          <dt className={styles.title}>準備中</dt>
          <dd className={styles.text}>
            まだそのページは完成していないか、
            <br />
            そもそも存在しないページです。
            <br />
            URLを確認の上、もう一度お試し下さい。
          </dd>
          <div className={styles.newsLink}>
              <ButtonLink href="./">トップページに戻る </ButtonLink>
          </div>
        </dl>
    </div>
  );
}