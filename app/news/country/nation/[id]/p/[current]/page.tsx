import { notFound, redirect } from "next/navigation";
import { getNewsList } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList/newslist";
import CountryPagination from "@/app/_components/CountryPagination/countrypagination";

export default async function Page({ params }: {params : Promise <{id: string; current : string}>} ){
    const { id : countryId, current: currentStr } = await params;
    const current = parseInt(currentStr, 10);
    const countryName = decodeURIComponent(countryId);
    console.log(countryName);

    if(Number.isNaN(current) || current < 1 ){
        notFound();
    }

     const { contents: allNews, totalCount } = await getNewsList({
        limit: 100, // 十分な大きさの数値
        offset: 0,
     });
  
    // 国名でフィルター
    const countryNews = allNews?.filter(
        news => news.country?.name === countryName
    ) || [];
    console.log(countryNews.length);

    if(countryNews.length === 0 ){
        notFound();
    }
    const listStart = NEWS_LIST_LIMIT * (current -1);
    const displayNews = countryNews.slice(listStart, listStart+NEWS_LIST_LIMIT);

    return (
        <> 
            <NewsList news={displayNews} />
            <CountryPagination totalNewsCount={countryNews.length} countryName={countryName} clickednumber={current} />
        </>
    );

}
