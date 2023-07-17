import instance from './axios';
import { Sick } from '../types/SickType';

export async function getSickList(search: string): Promise<Sick[]> {
  try {
    const response = await instance.get(`sick?q=${search}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
