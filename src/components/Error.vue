<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()
</script>

<template>
    <div class="w-full flex flex-row justify-center items-center min-h-[calc(100vh_-_84px_-_56px)]">
        <div class="flex-auto flex flex-col justify-center items-center gap-4">
            <div class="text-2xl">Movie not found.</div>
            <span
                @click="router.push('/')"
                class="cursor-pointer hover:text-amber-600 transition-all duration-75"
            >Back to homepage</span>
        </div>
    </div>
</template>