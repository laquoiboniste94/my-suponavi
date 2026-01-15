import Image from "next/image";
import styles from '../NewsList/newslist.module.css';
import type { News } from '../../_libs/microcms'
import Date from "@/app/Date/date";
import Link from "next/link";
import CountryTag from "../Country/country";

const noImage = '/no-image.png';

type Props = {
    news: News[];
};

export default function NewsList({ news}: Props) {
    if(news.length === 0) {
        return<p>記事がありません</p>;
    }
    return (
        <ul>
          {news.map((article) => (
            <li key={article.id} className={styles.list}> {/* リスト項目全体のレイアウト担当 */}
            <Link href={`/news/${article.id}`} className={styles.link}> {/* 画像と文章をまとめる部分のレイアウト担当 */}
              {article.image ? (
                <Image src={article.image.url} alt=""
                        className={styles.image} width={300} height={200} />
                        ): (
                          <Image src={noImage} alt="No Image"
                        className={styles.image} width={300} height={200} />

                        )} {/* ニュース画像のスタイル担当 */}
              <dl className={styles.content}> {/* ニュース文章のレイアウト担当 */}
                <dt className={styles.title}>{article.title}</dt> {/* ニュースタイトル文のスタイル担当 */}
                <dd className={styles.meta}> {/* ニュースカテゴリ文のレイアウト担当 */}
                  <CountryTag country={article.country} /> {/* ニュースカテゴリ文のスタイル担当 */}
                  <Date publishdate={article.publishedDate} />
                </dd>
              </dl>
            </Link>
            </li>
          ))}
        </ul> 
    );
}
