import { genreMap } from '@/constants/genreMap';

export type GenreCode = (typeof genreMap)[keyof typeof genreMap];
export type GenreName = keyof typeof genreMap;
