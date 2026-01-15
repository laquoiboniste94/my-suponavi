import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

// ========== 型定義 ==========
// 単一記事の型（詳細ページ用）
export type NewsItem = {
  title: string;
  country: {
    id: string;
    name: string;
  };
  main: string;
  image?: MicroCMSImage;
  publishedDate: string;
} & MicroCMSListContent;

// 互換性のために残す（既存コード用）
export type News = NewsItem;

// リーグ関連の型
export type Leagues = {
  image: MicroCMSImage;
  name: string;
  competition: string;
  profile: string;
} & MicroCMSListContent;

export type Competition = {
  tFifth: number;
  tFourth: number;
  tThird: number;
  tSecond: number;
  tFirst: number;
} & MicroCMSListContent;

export type Country = {
  name: string;
} & MicroCMSListContent;

// ========== クライアント ==========
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required!");
}
if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required!");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ========== 関数 ==========
// ニュース一覧取得
export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<NewsItem>({
    endpoint: "news",
    queries,
  });
  return listData;
};

// ニュース詳細取得（これが確実に動く！）
export const getNewsDetail = async (contentId: string) => {
  // Generic型を外して確実に取得
  const detailData = await client.get({
    endpoint: "news",
    contentId,
  });
  
  // デバッグ用
  console.log('🔍 getNewsDetail 結果:', {
    id: detailData?.id,
    hasContents: 'contents' in detailData,
    type: typeof detailData,
  });
  
  return detailData;
};

// リーグ一覧
export const getLeagueList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Leagues>({
    endpoint: "leagues",
    queries,
  });
  return listData;
};

/*import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Leagues = {
  image: MicroCMSImage;
  name: string;
  competition: Competition;
  profile: string;
} & MicroCMSListContent;

export type Competition = {
  tFifth: number;
  tFourth: number;
  tThird: number;
  tSecond: number;
  tFirst: number;
}  & MicroCMSListContent;

export type Country = {
  name: string;
} & MicroCMSListContent;

export type News = {
  title: string;
  country: {
    id: string;
    name: string;
  } & MicroCMSListContent;
  main: string;
  image?: MicroCMSImage;
  publishedDate: string;
} & MicroCMSListContent;

if( !process.env.MICROCMS_SERVICE_DOMAIN ) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required!");
}
if( !process.env.MICROCMS_API_KEY ) {
  throw new Error("MICROCMS_API_KEY is required!");
}
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getLeagueList = async(queries?: MicroCMSQueries) => {
  const listData = await client.getList<Leagues>({
    endpoint: "leagues",
    queries,
  });
  return listData;
};

export const getNewsList = async( queries?: MicroCMSQueries ) => {
  const listData = await client.getList<News>({
    endpoint: "news",
    queries,
  });
  return listData;
};

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {

  const detailData = await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
  });
  return detailData;
};*/
