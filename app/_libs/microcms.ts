export type Country = {
  name: string;
}
export type News = {
  id: string;
  title: string;
  country: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};
