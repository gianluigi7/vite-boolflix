<script>
import { store } from '../store';
 export default {
    name: 'AppHeader',
    data() {
      return {
         store,
      };
    },
 }
</script>

<template>
    <div class="container">
       
       <h1>BoolFlix</h1>
       <div>
          <label for="search-movie">cerca un film</label>
         <input type="text" id="search-movie" v-model="store.searchKey">
         <button @click="$emit('avviaRicerca')">Cerca</button>
      </div>
</div>



</template>

<style scoped lang="scss">

</style>