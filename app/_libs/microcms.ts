import { createClient } from "microcms-js-sdk";
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
  country: Country;
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
