import { AxiosResponse } from 'axios';
import API from '../../axios';

export async function getConsultNotify(): Promise<any> {
  const { data }: AxiosResponse<Response> = await API({
    method: 'GET',
    url: '/posts?userId=1',
  });
  return data;
}
