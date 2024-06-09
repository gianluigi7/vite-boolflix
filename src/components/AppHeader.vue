<script>
import axios from 'axios';
import { store } from '../store';
 export default {
    name: 'AppHeader',
    data() {
      return {
         store,
      };
    },
    methods: {
      AvviaRicerca() {
         const url = this.store.apiInfo.Url + this.store.apiInfo.endpoints.movie;
         console.log(url);
         axios
         .get(url, {
            params: {
               api_key: this.store.apiInfo.key,
               query: this.store.searchKey,
            }
         })
         .then(response => {
            console.log(response.data.results)
            this.store.movies = response.data.results;
            console.log( this.store.movies)
       });
         
      }
    }
 }
</script>

<template>
 <h1>BoolFlix</h1>
 <label for="search-movie">cerca un film</label>
 <input type="text" id="search-movie" v-model="store.searchKey">
 <button @click="AvviaRicerca">Cerca</button>
  
  <ul>
    <li v-for="movie in store.movies">
      <div>
         <p>Titolo: {{ movie.title }}</p>
         <p>Titolo originale: {{ movie.original_title }}</p>
         <p>Lingua: {{ movie.original_language }}</p>
         <p>Voto: {{ movie.vote_average }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">

</style>