<script setup>
import { StoreApi } from '@/stores/StoreApi';
import { storeToRefs } from 'pinia';
const StoreAPI = StoreApi()
const { BookRealData } = storeToRefs(StoreAPI)
import { RouterLink } from 'vue-router';
const GetById = async (item) => await StoreAPI.GetBookByID(item)
</script>
<template>
    <div class="w-full lg:w-1/2 ">
        <div v-for="(item) in BookRealData" :key="item.id"
            class="w-full p-6 mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <IconVue icon="mdi:books" class="size-8 text-black/70" />
            <header class="flex flex-row justify-between align-items-center ">
                <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {{ item.title }}
                </h5>
                <p class="pl-3 mb-3 font-normal text-gray-500 dark:text-gray-400">
                    Year: {{ item.year }}
                </p>
            </header>
            <footer>
                <router-link :to="{ name: 'BooksDetailsView', params: { id: item.id } }">
                    ID: {{ item.id }}
                </router-link>
            </footer>
            <ButtonVue class="mt-4" @click="GetById(item)">
                Details
                <router-link :to="{ name: 'BooksDetailsView', params: { id: item.id } }">
                    ID: {{ item.id }}
                </router-link>
                <IconVue icon="flowbite:edit-solid" class="ml-2 text-white duration-500 group-hover:rotate-45 size-4" />
            </ButtonVue>
            <ButtonVue class="mt-4 ml-2" @click="putById(item)">
                Edit Books
                <IconVue icon="flowbite:edit-solid"
                    class="ml-2 text-white duration-500 fill-white group-hover:rotate-45 size-4" />
            </ButtonVue>
        </div>
    </div>
</template>