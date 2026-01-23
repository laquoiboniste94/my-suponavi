/*import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";
import styles from '../CountryPagination/countrypagination.module.css';

type Props = {
    totalNewsCount: number;
    countryName: string;
    clickednumber: number;
};

export default function CountryPagination({totalNewsCount, countryName, clickednumber }: Props) {
    const pages = Array.from({ length: Math.ceil(totalNewsCount / NEWS_LIST_LIMIT)},
                                    (_, i)=> i+1
                                );

    console.log(pages.length);

     return (
        <nav>
            <ul className={styles.container}>
                {pages.map((p) => (
                     <li key={p} className={styles.list}>
                        {clickednumber !== p ? (
                            <Link href={`/news/country/nation/${countryName}/p/${p}`} className={styles.otherPage}>
                                {p}
                            </Link>
                        ) : (
                            <Link href={`/news/country/nation/${countryName}/p/${p}`} className={styles.currentPage}>
                                {p}
                            </Link>
                        )} 
                    </li>
                ))}
            </ul>
        </nav>
    );

}*/
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";
import styles from '../CountryPagination/countrypagination.module.css';

type Props = {
    totalNewsCount: number;
    countryName: string;
    clickednumber: number;
};

export default function CountryPagination({totalNewsCount, countryName, clickednumber }: Props) {
    const pages = Array.from({ length: Math.ceil(totalNewsCount / NEWS_LIST_LIMIT)},
                                    (_, i)=> i+1
                                );

    console.log('ページネーション情報:');
    console.log('- 国名:', countryName);
    console.log('- 現在のページ:', clickednumber);
    console.log('- 総ページ数:', pages.length);

    // ページ番号に基づいて正しいリンクを生成する関数
    const getPageLink = (pageNumber: number) => {
        if (pageNumber === 1) {
            // ページ1は特別なURL: /news/country/スペイン
            return `/news/country/${encodeURIComponent(countryName)}`;
        } else {
            // ページ2以降は通常のURL: /news/country/nation/スペイン/p/2
            return `/news/country/nation/${encodeURIComponent(countryName)}/p/${pageNumber}`;
        }
    };

    return (
        <nav>
            <ul className={styles.container}>
                {pages.map((p) => {
                    const isCurrentPage = clickednumber === p;
                    const pageLink = getPageLink(p);
                    
                    console.log(`ページ${p}: リンク=${pageLink}, クリックされたページか?=${isCurrentPage}`);
                    
                    return (
                        <li key={p} className={styles.list}>
                            {!isCurrentPage ? (
                                // 他のページへのリンク
                                <Link href={pageLink} className={styles.otherPage}>
                                    {p}
                                </Link>
                            ) : (
                                // 現在のページはリンクではなくspan（アクティブ状態）
                                <span className={styles.currentPage}>
                                    {p}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}