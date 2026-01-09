import Image from "next/image";
import styles from '../NewsList/newslist.module.css';
import type { News } from '../../_libs/microcms'
import Country from "../Country/country";
import Date from "@/app/Date/date";
import Link from "next/link";

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
              <Image className={styles.image} 
                      src={noImage} alt='No Image'
                      width={400} height={200} /> {/* ニュース画像のスタイル担当 */}
              <dl className={styles.content}> {/* ニュース文章のレイアウト担当 */}
                <dt className={styles.title}>{article.title}</dt> {/* ニュースタイトル文のスタイル担当 */}
                <dd className={styles.meta}> {/* ニュースカテゴリ文のレイアウト担当 */}
                  <Country country={article.country} /> {/* ニュースカテゴリ文のスタイル担当 */}
                  <Date publishdate={article.publishedAt} />
                </dd>
              </dl>
            </Link>
            </li>
          ))}
        </ul> 
    );
}
