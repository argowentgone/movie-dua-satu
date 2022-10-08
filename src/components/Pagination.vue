<script setup>
defineProps({
  page: {
    type: Number,
    required: true
  }
})
const emit = defineEmits(['prev', 'next'])
</script>

<template>
  <div class="wrapper-pagination py-4 px-6">
    <button
      :disabled="page === 1"
      @click="$emit('prev')"
      class="bg-amber-400 text-white active:bg-amber-600 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:bg-amber-300"
    >Prev</button>
    <span>current page {{page}}</span>
    <button
      @click="$emit('next')"
      class="bg-amber-400 text-white active:bg-amber-600 font-bold uppercase text-xs px-4 py-2 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    >Next</button>
  </div>
</template>

<style scoped>
.wrapper-pagination {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}
.wrapper-pagination button {
  padding: 4px 1rem;
}
</style>
