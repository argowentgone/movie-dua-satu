<script setup>
  import {reactive, onMounted} from 'vue'
  import axios from 'axios'
  import {useRoute, useRouter} from 'vue-router'
  import ErrorPage from '../components/Error.vue'

  const route = useRoute()
  const router = useRouter()
  const isAdmin = localStorage.getItem('isAdmin')
  const state = reactive({
    movie: null,
    error: false
  })

  const BASE_URL = import.meta.env.VITE_APP_MOVIE_API
  const API_KEY = import.meta.env.VITE_APP_MOVIE_API_KEY
  const API = BASE_URL + '?apikey=' + API_KEY + '&'
  // console.log('useRoute', route.params.id)

  // fetch API
  function getMoviesById(id) {
    axios
      .get(API + 'i=' + id)
        .then((response) => {
          // console.log(response.data.Response);
          if (response.data.Response === 'False') {
            state.error = true
          } else {
            state.movie = response.data
          }
      })
      .catch((err) => {
        if (err) {
          router.push('/')
        }
      })
  }

  onMounted(() => {
    const { params } = route
    if (!route.params.id) {
      router.push('/')
    }
    getMoviesById(params.id)
  })
</script>

<template>
  <div v-if="state.error">
    <ErrorPage />
  </div>
  <div v-else class="wrapper-detail">
    <div class="content">
      <h1 class="text-4xl font-bold">{{state.movie?.Title}} ({{state.movie?.Year}})</h1>
      <h4>IMDB Rating {{state.movie?.imdbRating}} - Votes {{state.movie?.imdbVotes}}</h4>
      <p>{{state.movie?.Plot}}</p>
    </div>
    <div class="side-content">
      <img :src="state.movie?.Poster" :alt="state.movie?.Title">
      <div><span class="title">DVD:</span> {{state.movie?.DVD}}</div>
      <div><span class="title">Released:</span> {{state.movie?.Released}}</div>
      <div><span class="title">Director:</span> {{state.movie?.Director}}</div>
      <div><span class="title">Writer:</span> {{state.movie?.Writer}}</div>
      <div><span class="title">Genre:</span> {{state.movie?.Genre}}</div>
      <div><span class="title">Actors:</span> {{state.movie?.Actors}}</div>
      <div><span class="title">BoxOffice:</span> {{state.movie?.BoxOffice}}</div>
      <div><span class="title">Country:</span> {{state.movie?.Country}}</div>
      <div><span class="title">Language:</span> {{state.movie?.Language}}</div>
      <div v-for="(rating, index) in state.movie?.Ratings" :key="index">
        <div><span class="title">{{rating.Source}}</span> -> {{rating.Value}}</div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
.wrapper-detail {
  padding: 3rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
}
.content,
.side-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.content {
  gap: 1rem;
}
.side-content {
  gap: .25rem;
}
.side-content > img {
  margin-bottom: 1rem;
}
.side-content .title {
  font-weight: 700;
}
</style>
