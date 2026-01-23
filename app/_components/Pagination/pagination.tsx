import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";
import styles from '../Pagination/pagination.module.css';

type Props = {
    totalNewsNum: number;
    current?: number;
};

export default function Pagination({ totalNewsNum, current }: Props){
    const pages = Array.from({ length: Math.ceil(totalNewsNum / NEWS_LIST_LIMIT)},
                                (_, i)=> i+1
                            );

    return (
        <nav>
            <ul className={styles.container}>
                {pages.map((p) => (
                     <li key={p} className={styles.list}>
                        {current !== p ? (
                            <Link href={`/news/page/p/${p}`} className={styles.otherPage}>
                                {p}
                            </Link>
                        ) : (
                            <Link href={`/news/page/p/${p}`} className={styles.currentPage}>
                                {p}
                            </Link>
                        )} 
                    </li>
                ))}
            </ul>
        </nav>
    );
}
