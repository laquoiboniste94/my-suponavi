import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";
const revalidate = 60;


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
  competition: Competition;
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
/*export const getNewsDetail = async (contentId: string) => {
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
};*/
// microcms.tsを修正
/*export const getNewsDetail = async (
  contentId: string, 
  options?: { draftKey?: string }
) => {
  const detailData = await client.get({
    endpoint: "news",
    contentId,
    queries: options?.draftKey ? { draftKey: options.draftKey } : undefined,
    customRequestInit: {
      next: {
        revalidate: options?.draftKey === undefined ? 60 : 0,
      },
    },
  });
  
  console.log('🔍 getNewsDetail 結果:', {
    id: detailData?.id,
    draftKey: options?.draftKey,
    type: typeof detailData,
  });
  
  return detailData;
};*/

export const getNewsDetail = async (
  contentId: string, 
  options?: { draftKey?: string }
) => {
  const apiKey: string = process.env.MICROCMS_API_KEY!;
  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;

  const draftKey = options?.draftKey;
  const baseUrl = `https://${serviceDomain}.microcms.io/api/v1`;
  
  // クエリパラメータ構築
  const params = new URLSearchParams();
  if (draftKey) {
    params.set('draftKey', draftKey);
  }
  
  const queryString = params.toString();
  const url = `${baseUrl}/news/${contentId}${queryString ? '?' + queryString : ''}`;
  
  console.log('🔍 getNewsDetail:', {
    url,
    draftKey: draftKey || 'なし',
    revalidate: draftKey ? 0 : 60,
  });
  
  const response = await fetch(url, {
    headers: {
      'X-MICROCMS-API-KEY': apiKey,
      'Content-Type': 'application/json',
    },
    // Next.jsのfetch拡張機能
    next: {
      revalidate: draftKey ? 0 : 60,
    },
  });
  
  if (!response.ok) {
    throw new Error(`記事取得失敗: ${response.status} ${response.statusText}`);
  }
  
  const detailData = await response.json();
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


