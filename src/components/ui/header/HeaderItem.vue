<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import { routes } from '../../../router/index.ts';
const ToggleItem = ref(true);
</script>
<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
            <RouterLink class="flex flex-row-reverse font-bold text-black align-items-center" to="/">
                Bookshelf
                <IconVue icon="logos:vue" class="w-12 h-12" />
            </RouterLink>
            <button @click="ToggleItem = !ToggleItem" data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div :class="{ 'tems-center justify-center hidden w-full md:flex md:w-auto md:order-1': ToggleItem }"
                id="navbar-default">
                <ul
                    class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <NavItem :data="routes" />
                </ul>
            </div>
        </div>
    </nav>
</template>