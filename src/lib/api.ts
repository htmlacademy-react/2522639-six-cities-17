// //  api запрос
// import axios from 'axios';
// import { Offer } from '../types/offer';

// // URL API
// const BASE_URL = 'https://16.design.htmlacademy.pro/six-cities';

// // Получение всего списка предложений
// export async function fetchOffers(): Promise<Offer[]> {
//   try {
//     const response = await axios.get<Offer[]>(`${BASE_URL}/offers`);
//     return response.data;
//   } catch {
//     return [];
//   }
// }
