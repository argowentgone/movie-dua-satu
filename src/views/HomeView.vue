<script setup>
import {ref, reactive, onMounted, onBeforeMount} from 'vue'
import {useRouter} from 'vue-router'
import axios from 'axios'
import Card from '../components/Card.vue'
import Pagination from '../components/Pagination.vue'
import {serializeQueryParams} from '../utils/serializeQuery'

const BASE_URL = import.meta.env.VITE_APP_MOVIE_API
const API_KEY = import.meta.env.VITE_APP_MOVIE_API_KEY
const API = BASE_URL + '?apikey=' + API_KEY + '&'

const router = useRouter()

const state = reactive({
  movies: [],
  qParams: {
    s: 'avengers', // change this value if you want to change the movie by this state
    page: 1 // parameter pagination
  }
})

// fetch API
function getMovies() {
  axios
    .get(API + serializeQueryParams(state.qParams))
      .then((response) => {
        // console.log(response.data);
        state.movies = response.data['Search']
    })
    .catch((err) => console.log(err))
}

onBeforeMount(() => getMovies())

function onClickDetailMovie(id) {
  router.push(`/movie/${id}`)
}

function onPrevPage() {
  state.qParams.page -= 1
  getMovies()
}

function onNextPage() {
  state.qParams.page += 1
  getMovies()
}

</script>

<template>
  <main>
    <div class="wrapper-home">
      <div v-for="(movie, index) in state.movies" :key="index">
        <Card :data-movie="movie" @click="onClickDetailMovie(movie.imdbID)" />
      </div>
    </div>
    <Pagination :page="state.qParams.page" @prev="onPrevPage" @next="onNextPage" />
  </main>
</template>

<style scoped>
  .wrapper-home {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 2fr);
    gap: 1.5rem;
  }
</style>
