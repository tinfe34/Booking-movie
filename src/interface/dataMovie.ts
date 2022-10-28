import { Movie } from "./movie";

export interface dataMovies {
    count: number;
    currentPage: number;
    items: Movie[];
    totalCount: number;
    totalPages: number;
}
