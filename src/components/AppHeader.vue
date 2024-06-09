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
         const urlSeries = this.store.apiInfo.Url + this.store.apiInfo.endpoints.tv;
        
         axios
         .get(url, {
            params: {
               api_key: this.store.apiInfo.key,
               language: this.store.languageKey,
               query: this.store.searchKey,
            }
         })
         .then(response => {
            
            this.store.movies = response.data.results;
            
       });
         axios
         .get(urlSeries, {
            params: {
               api_key: this.store.apiInfo.key,
               language: this.store.languageKey,
               query: this.store.searchKey,
            }
         })
         .then(response => {
            
            this.store.series = response.data.results;
            console.log(this.store.series)
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
         <p v-if="movie.original_language === 'it'">Lingua: {{ movie.original_language }} bandiera IT</p>
         <p v-else-if="movie.original_language === 'en'">Lingua: {{ movie.original_language }} bandiera EN</p>
         <p v-else >Lingua: {{ movie.original_language }} </p>
         <p>Voto: {{ movie.vote_average }}</p>
      </div>
      <hr>
      </li>
   </ul>
 <h2>Serie TV</h2>
  <ul>
    <li v-for="serie in store.series">
      <div>
         <p>Titolo: {{ serie.name }}</p>
         <p>Titolo originale: {{ serie.original_name }}</p>
         <p v-if="serie.original_language === 'it'">Lingua: {{ serie.original_language }} bandiera IT</p>
         <p v-else-if="serie.original_language === 'en'">Lingua: {{ serie.original_language }} bandiera EN</p>
         <p v-else >Lingua: {{ serie.original_language }} </p>
         <p>Voto: {{ serie.vote_average }}</p>
      </div>
      <hr>
      </li>
   </ul>

</template>

<style scoped lang="scss">

</style>