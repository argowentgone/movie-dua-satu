<script setup>
import {onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()
const isAdmin = localStorage.getItem('isAdmin') // get localstorage browser

onMounted(() => {
    const {meta} = route
    if (String(meta?.isAdmin) !== isAdmin) {
        router.push('/')
    }
})

</script>

<template>
    <div class="w-full flex flex-row justify-center items-center min-h-[calc(100vh_-_84px_-_56px)]">
        <div class="flex-auto flex flex-col justify-center items-center gap-4">
            <h1>Dashboad</h1>
        </div>
    </div>
</template>