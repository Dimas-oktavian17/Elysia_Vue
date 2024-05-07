<script setup>
import { StoreApi } from '@/stores/StoreApi';
import { onMounted } from 'vue';
const StoreAPI = StoreApi()
onMounted(() => StoreAPI.GetAllBooks(`http://localhost:3000/books`))
</script>
<template>
  <DefaultLayouts>
    <CardComponent></CardComponent>
  </DefaultLayouts>
</template>
