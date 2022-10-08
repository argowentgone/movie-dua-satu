<script setup>
const props = defineProps({
  dataMovie: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="wrap-card">
    <div class="card-thumbnail">
      <img :src="dataMovie.Poster" :alt="dataMovie.Title">
    </div>
    <div class="card-title">
      <span>{{dataMovie.Title}} ({{dataMovie.Year}})</span>
    </div>
  </div>
</template>

<style scoped>
.wrap-card {
  padding: 1rem;
  background-color: aliceblue;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0px 6px 6px rgba(0,0,0, 0.5);
  border-radius: 8px;
  align-content: stretch;
  gap: 1rem;
}
.wrap-card:hover {
  opacity: 0.75;
  transition: all .25s ease-in;
}
.card-thumbnail {
  flex: 1;
  display: flex;
}
.card-thumbnail > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 300px;
}
.card-title {
  flex: 1;
  display: flex;
  color: #333333;
  font-size: .75rem;
  justify-content: center;
}
.card-title span {
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}
</style>