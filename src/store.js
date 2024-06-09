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
    }
});