import { getNewsList } from "../_libs/microcms";
import NewsList from "../_components/NewsList/newslist";
import Pagination from "../_components/Pagination/pagination";
import { NEWS_LIST_LIMIT } from "../_constants";
import SearchField from "../_components/SearchField/searchfiled";


export default async function Page() {
    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
    });

    return (
        <>
            <SearchField />
            <NewsList news={news} />
            <Pagination totalNewsNum={totalCount} current={1} />
        </>
    );
}