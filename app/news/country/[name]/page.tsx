// app/news/country/[name]/page.tsx
import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList/newslist";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import LeagueName from "@/app/_components/LeagueName/leaguename";
import CountryPagination from "@/app/_components/CountryPagination/countrypagination";

export default async function Page({ 
  params 
}: { 
  params: Promise<{ name: string }> 
}) {
  const { name: countryName } = await params;
  
  // 静的ファイルは即座に何もしない
  if (countryName.includes('.')) {
    console.log(`🚫 静的ファイルをスキップ: ${countryName}`);
    return null;
  }
  
  const decodedName = decodeURIComponent(countryName);
  console.log(`🎯 国別検索: ${decodedName}`);
  
  // 全記事取得してフィルター
  const { contents: allNews, totalCount } = await getNewsList({
    limit: 100,
    offset: 0,
  });
  
  // 国名でフィルター
  const countryNews = allNews?.filter(
    news => news.country?.name === decodedName
  ) || [];
  const displayNews = countryNews.slice(0,2);


  console.log(`📊 結果: ${countryNews.length}件`);
  
  // 表示
  return (
    <div>
      <h1>
        <LeagueName country={decodedName} />
      </h1>
      {countryNews.length > 0 ? (
        <>
          <NewsList news={displayNews} />
          <CountryPagination totalNewsCount={countryNews.length} countryName={decodedName} clickednumber={1} />
        </>
      ) : (
        <p>{decodedName}の記事はまだありません</p>
      )}
    </div>
  );
}
