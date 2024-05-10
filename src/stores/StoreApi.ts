import { ref, computed, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import type { Books, BooksInput } from '@/interfaces/InterfacesStoreApi'
export const StoreApi = defineStore('StoreApi', () => {
    // state
    const API_URL = ref<string>(`http://localhost:3000/books`)
    const Books = ref<Books[]>([])
    const statuses = ref<boolean>(false)
    const Succes = ref<Books>()
    const Error = ref<unknown | string>()
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
            Error.value = error
            statuses.value = true
            setTimeout(() => statuses.value = false, 3000);
        }
    }
    const OnSubmit = async (values: BooksInput, { resetForm }: { resetForm: any }) => {
        // send data to API
        try {
            const data = await fetch(API_URL.value, {
                method: "POST",
                body: JSON.stringify(values, null, 2),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            const response = await data.json()
            Succes.value = response
            statuses.value = true
            setTimeout(() => statuses.value = false, 3000);
            resetForm()
        } catch (error) {
            Error.value = error
            statuses.value = true
            setTimeout(() => statuses.value = false, 3000);
        }
    }
    return {
        statuses,
        Succes,
        Error,
        API_URL,
        Books,
        BookRealData,
        GetAllBooks,
        OnSubmit
    }
})
