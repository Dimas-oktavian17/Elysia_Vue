<script setup>
import { RouterLink } from 'vue-router';
import { StoreApi } from '@/stores/StoreApi';
const StoreAPI = StoreApi()
console.log(StoreAPI.Books.);
</script>
<template>
    <div
        class="w-full p-6 mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <IconVue icon="mdi:books" class="size-8 text-black/70" />
        <header class="flex flex-row justify-between align-items-center ">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                item
            </h5>
            <p class="pl-3 mb-3 font-normal text-gray-500 dark:text-gray-400">
                Year: 2004
            </p>
        </header>
        <footer>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                ID:
            </p>
        </footer>
        <RouterLink to="#" class="inline-flex items-center font-medium transition-all text-black/70 group">
            Edit Books
            <IconVue icon="flowbite:edit-solid" class="duration-500 group-hover:rotate-45 size-8 text-black/70" />
        </RouterLink>
    </div>
</template>