<script>
import { store } from '../store';
 export default {
    name: 'AppMain',
    data() {
      return {
         store,
      };
    },
 }
</script>

<template>
 <main>
   <div class="container">

<ul>
   <li v-for="movie in store.movies">
      <img :src="store.imgInfo.baseUrl + movie.backdrop_path" :alt="movie.title">
         <div class="none">
         <p>Titolo: {{ movie.title }}</p>
       <p>Titolo originale: {{ movie.original_title }}</p>
    <p v-if="movie.original_language === 'it'">Lingua: {{ movie.original_language }} bandiera IT</p>
 <p v-else-if="movie.original_language === 'en'">Lingua: {{ movie.original_language }} bandiera EN</p>
<p v-else >Lingua: {{ movie.original_language }} </p>
<p>Voto: {{ movie.vote_average }}</p>
</div>
</li>
</ul>
</div>

<h2>Serie TV</h2>
<div class="container">

<ul>
 <li v-for="serie in store.series">
    <img :src="store.imgInfo.baseUrl + serie.backdrop_path" :alt="serie.name">
    
    <div class="none">
       <p>Titolo: {{ serie.name }}</p>
       <p>Titolo originale: {{ serie.original_name }}</p>
       <p v-if="serie.original_language === 'it'">Lingua: {{ serie.original_language }} bandiera IT</p>
       <p v-else-if="serie.original_language === 'en'">Lingua: {{ serie.original_language }} bandiera EN</p>
       <p v-else >Lingua: {{ serie.original_language }} </p>
       <p>Voto: {{ serie.vote_average }}</p>
     </div>
</li>
</ul>
</div>
 </main>
</template>

<style scoped lang="scss">
 
</style>