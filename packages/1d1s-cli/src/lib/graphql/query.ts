import axios, { AxiosRequestConfig } from 'axios';

interface GraphQLQuery<V> {
  query: string;
  variables?: V;
}

export async function query<D, V = unknown>(url: string, query: GraphQLQuery<V>) {
  const config: AxiosRequestConfig<GraphQLQuery<V>> = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept-Encoding': 'gzip,deflate,compress' },
    data: query,
  };

  const { data } = await axios<D>(url, config);

  return data;
}
