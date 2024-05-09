import { ref, computed, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import type { Books } from '@/interfaces/InterfacesStoreApi'
export const StoreApi = defineStore('StoreApi', () => {
    // state
    const Books = ref<Books[]>([])
    // getters
    const BookRealData = computed(() => Books.value)
    // actions
    const GetAllBooks = async (URL: string): Promise<void> => {
        try {
            const response = await fetch(URL);
            const { data: { books } } = await response.json();
            Books.value = books;
            watchEffect(() => Books.value)
        } catch (error) {
            console.error(error);
        }
    }
    return {
        Books,
        BookRealData,
        GetAllBooks
    }
})
