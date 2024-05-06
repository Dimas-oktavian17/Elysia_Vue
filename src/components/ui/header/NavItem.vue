<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    data: {
        type: Array,
        required: true // Make sure data prop is required
    }
});
</script>

<template>
    <li v-for="({ path, name }, index) in props.data" :key="index">
        <RouterLink
            class="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
            aria-current="page" :to="path"> {{ name }} </RouterLink>
    </li>
</template>
