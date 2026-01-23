import Hero from "../_components/Hero/hero";
import Image from "next/image";
import styles from '../leagues/page.module.css';
import { getLeagueList } from "../_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "../_constants";
import Link from "next/link";
import { leagueToNation } from "../_libs/utils";


/*const data = {
    contents: [
        {
            id: "1",
            image: {
                url: "/england.png",
                width: 300,
                height:200,
            },
            name: "プレミアリーグ",
            competition: {
                tFifth: "2",
                tFourth: "2",
                tThird: "2",
                tSecond: "3",
                tFirst: "3",       
            },
            profile: "巨額のテレビマネーを背景とする圧倒的資金力で今や世界No.1リーグへと成長した。英語圏の優位性もあり、全世界から選手、監督が集まり競争力はさらに上向き。熾烈を極める上位争いと過密日程が欧州カップ戦でマイナスに作用する懸念も。"

        },
         {
            id: "2",
            image: {
                url: "/spain.jpg",
                width: 300,
                height:200,
            },
            name: "リーガエスパニョーラ",
            competition: {
                tFifth: "2",
                tFourth: "3",
                tThird: "1",
                tSecond: "3",
                tFirst: "1",       
            },
            profile: "10年前まではレアル、バルサの黄金時代もあり絶対的な存在だったが、ともに弱体化。3強とそれ以外の戦力格差も大きく、競争力は右肩下がりか。"
        },
         {
            id: "3",
            image: {
                url: "/germany.jpg",
                width: 300,
                height: 200,
            },
            name: "ブンデスリーガ",
            competition: {
                tFifth: "2",
                tFourth: "2",
                tThird: "0",
                tSecond: "1",
                tFirst: "2",       
            },
            profile: "かつてのバイエルン一強状態に多少は変化がみられるとは言えど、2番手以降が欧州の舞台で存在感を出せず、国内リーグの商業的な成功とは裏腹に競争力は横ばいか。"
        },
         {
            id: "4",
            image: {
                url: "/italy.jpg",
                width: 300,
                height:200,
            },
            name: "セリエA",
            competition: {
                tFifth: "1",
                tFourth: "0",
                tThird: "3",
                tSecond: "0",
                tFirst: "0",       
            },
            profile: "15年前の壊滅状態からは脱して欧州でも存在感は戻ってきたとはいえど、かつての絶対王者としての威光はもはや無し。自国人タレントの枯渇も深刻で現状維持が精一杯か。"
        },
         {
            id: "5",
            image: {
                url: "/france.jpg",
                width: 300,
                height:200,
            },
            name: "リーグアン",
            competition: {
                tFifth: "1",
                tFourth: "1",
                tThird: "0",
                tSecond: "0",
                tFirst: "1",       
            },
            profile: "かつては3大リーグの草刈り場にすぎない存在だったが、PSGの台頭もあり、欧州の舞台で堅実に存在感を増している。フランス語圏の優位性もありタレントは豊富。"
        },
    ],
};*/

export default async function Page() {

    const data = await getLeagueList({ limit: MEMBERS_LIST_LIMIT });

    return (
            <div className={styles.container}>
                {data.contents.length === 0 ? (
                    <p className={styles.empty}>工事中</p>
                ) : (
                    <ul>
                        {data.contents.map((league) => (
                                <li key={league.id} className={styles.list}>
                                    <Image 
                                        src={league.image.url} alt=""
                                        width={league.image.width}
                                        height={league.image.height}
                                        className={styles.image}/>
                                    <dl>
                                        <Link href={`/news/country/${leagueToNation(league.name)}`}>
                                            <dt className={styles.name}>{league.name}</dt>
                                        </Link>
                                        <dd className={styles.results}>自国勢の直近5年の欧州CLでベスト8以上の輩出数</dd>
                                            <div className={styles.competition}>
                                                <dd>{league.competition.tFifth}</dd>
                                                <dd>{league.competition.tFourth}</dd>
                                                <dd>{league.competition.tThird}</dd>
                                                <dd>{league.competition.tSecond}</dd>
                                                <dd>{league.competition.tFirst}</dd>
                                            </div>
                                        <dd className={styles.profile}>{league.profile}</dd>
                                    </dl>
                                </li>
                        ))}
                    </ul>
                )}
            </div>
    );
}