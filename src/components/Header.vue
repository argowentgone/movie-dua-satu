<script setup>
    import { RouterLink } from 'vue-router'
    import Search from './Search.vue'
</script>

<template>
    <div class="header bg-amber-400">
        <div class="flex flex-row justify-between items-center align-middle">
            <RouterLink to="/" class="text-lg hover:text-gray-400 leading-none">Movie Dua Satu</RouterLink>
            <div class="self-center">
                <!-- Fitur search coming soon... -->
                <!-- If for a week have not update, you can notice me in github or email -->
                <Search />
            </div>
        </div>
    </div>
</template>

<style>
    .header {
        padding: 1.5rem 1rem;
        color: #ffffff;
        font-weight: 600;
        font-size: 1.5rem;
    }
</style>