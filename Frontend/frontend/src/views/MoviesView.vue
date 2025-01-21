<script>
import MoviesTable from '../components/MoviesTable.vue';
export default {
  components: { 
    MoviesTable
  },
  data() { 
    return {
    allMovies: []
  }
},
  async created() {
    this.allMovies = await (await fetch('http://localhost:8080/users')).json()
  }
}
</script>

<template>
  <main>
    <MoviesTable :items="allMovies
    
    "/>
  </main>
</template>