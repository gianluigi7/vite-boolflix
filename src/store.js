import { reactive } from "vue";

export const store = reactive({
    searchKey: '',
    movies: [],
    series: [],
    languageKey: 'it_IT',
    apiInfo: {
        key: '7b087c7a40cfaccf9a035cddd5f8305b',
        Url: 'https://api.themoviedb.org/3/search/',
        endpoints: {
            movie: 'movie',
            tv: 'tv',
    }
    },
    imgInfo: {
       baseUrl: 'https://image.tmdb.org/t/p/w342',
       poster_sizes: [
         "w92",
         "w154",
         "w185",
         "w342",
         "w500",
         "w780",
         "original"
        ],
    }
});