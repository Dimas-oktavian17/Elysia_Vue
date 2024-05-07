import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useFetch } from '@vueuse/core'
// import type { Books } from '@/interfaces/InterfacesStoreApi'

export const StoreApi = defineStore('StoreApi', () => {
    // state
    const Books = ref()
    // const Result = ref(Books.value.data.books)
    // ref<Books>({
    //     IsFetching: false,
    //     Error: '',
    //     Data: ''
    // })
    // getters
    // const getters = computed(() => data.value)
    // actions
    const GetAllBooks = async (URL_API: string) => {
        try {
            const { isFetching, error, data } = await useFetch(URL_API)
            return Books.value = data
            // Books.value = {
            //     IsFetching: isFetching.value,
            //     Error: error.value,
            //     Data: data.value
            // }
        } catch (error) {
            console.error(error);
        }
    }
    return {
        Books,
        Result,
        // getters,
        GetAllBooks
    }
})
