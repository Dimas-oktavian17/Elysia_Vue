<script setup>
import { StoreApi } from '@/stores/StoreApi';
// import { onMounted } from 'vue';
const StoreAPI = StoreApi()
// onMounted(() => StoreAPI.GetAllBooks(StoreAPI.API_URL))
</script>
<template>
    <!-- <DefaultLayouts> -->
    <!-- <CardComponent />
        <FormVue /> -->
    <ul>
        <li v-for="({ title, id }) in StoreAPI.dataView" :key="id">
            {{ title }} - {{ id }}
        </li>
    </ul>
    <!-- </DefaultLayouts> -->
</template>
