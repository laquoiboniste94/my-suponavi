import Image from "next/image";
import type { News } from "@/app/_libs/microcms";
import Date from "@/app/Date/date";
import CountryTag from "../Country/country";
import styles from '../Article/article.module.css';

type Props = {
    data : News;
};
const noImage = "no-image.png";

export default function Article({ data }: Props) {
    return (
        <main>
            <h1 className={styles.title}>{data.title}</h1>
            <div className={styles.meta}>
                <CountryTag country={data.country}/>
                <Date publishdate={data.publishedDate}/>
            </div>
            {data.image ? (
                <Image src={data.image.url} alt=""
                    className={styles.image}
                    width={data.image.width}
                    height={data.image.height}
                />
            ): (
            <Image src={noImage} alt="NoImage"
                    className={styles.noImage}
                /> 

            )}
            <div className={styles.main} dangerouslySetInnerHTML={{ __html: data.main, }}/>
        </main>
    );
}