// app/news/[slug]/page.tsx の超シンプル版
import { notFound } from "next/navigation";
import { getNewsDetail } from "../../_libs/microcms";
import Article from "@/app/_components/Article/article";
import ButtonLink from "@/app/_components/ButtonLink/buttonlink";
import styles from '../[slug]/page.module.css';

export default async function Page({ params }: { params: Promise<{ slug: string, dk: string }> }) {
  const { slug, dk: draftKey } = await params;
  console.log('プレビュー用ページパラメータ:', { slug, draftKey });

  const article = await getNewsDetail(slug, {draftKey: draftKey}).catch(notFound);

  console.log('取得した記事:', article?.id, article?.title);
 
  
  return (
    <>
        <div className={styles.main}>
            <Article data={article} />
        </div>
        <div className={styles.footer}>
            <ButtonLink href="news">ニュース一覧へ戻る</ButtonLink>
        </div>
    </>
  );
}
/*import { getNewsDetail } from "@/app/_libs/microcms";

type Props = {
    params: {
        slug: string;
    };
};

export default async function Page(props: Props) {
    const data = await getNewsDetail(props.params.slug);

    return <div>{JSON.stringify(data)}</div>;
    
}*/
