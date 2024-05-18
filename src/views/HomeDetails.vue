<script setup>
import { StoreApi } from '@/stores/StoreApi'
// import { Table } from 'lucide-vue-next';
import { storeToRefs } from 'pinia';
// import {ref,compu} from 'vue'
const StoreAPI = StoreApi()
const { dataView } = storeToRefs(StoreAPI)
</script>

<template>
    <!-- ? should be wrapp -->
    <DefaultLayouts>

        <TestVue :data="dataView" />
    </DefaultLayouts>
</template>