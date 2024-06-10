<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { store } from './store';


export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    search() {
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
  <header>
    <AppHeader @avviaRicerca="search"/>
  </header>
  <main>
    <AppMain/>
  </main>
  <footer>
    <AppFooter/>
  </footer>
  
</template>
<style></style>