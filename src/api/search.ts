import instance from './axios';
import { Sick } from '../types/SickType';
import { getCache, setCache } from '../utils/cacheStorage';

export async function getSickList(search: string): Promise<Sick[]> {
  try {
    const cachedResponse = await getCache(search);
    if (cachedResponse) return cachedResponse.json();
    console.info('calling api');
    const response = await instance.get(`sick?q=${search}`);
    await setCache(search, response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
