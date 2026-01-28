import { notFound } from "next/navigation";
import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList/newslist";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/app/_components/Pagination/pagination";

const pagenationNum = NEWS_LIST_LIMIT;

export default async function Page({ params }: { params : Promise <{current: string}>} ) {
    const { current: currentStr } = await params;
    const current = parseInt(currentStr, 10);

    if(Number.isNaN(current) || current < 1) {
        notFound();
    }

    const { contents: news, totalCount } = await getNewsList({
        limit: pagenationNum,
        offset: pagenationNum * (current -1),
    });

    if(news.length === 0 ){
        notFound();
    }

    return (
        <>
            <NewsList news={news} />
            <Pagination totalNewsNum={totalCount} current={current}/>
        </>
    );
}