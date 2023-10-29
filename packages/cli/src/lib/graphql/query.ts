import axios, { AxiosRequestConfig } from 'axios';

interface GraphQLQuery<V> {
  query: string;
  variables?: V;
}

export async function query<D, V = unknown>(url: string, query: GraphQLQuery<V>) {
  const config: AxiosRequestConfig<GraphQLQuery<V>> = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
      Cookie: process.env.LEETCODE_API_COOKIE,
    },
    data: query,
  };

  const { data } = await axios<D>(url, config);

  return data;
}
