import { ref, reactive, onMounted } from 'vue'
import { defineStore } from "pinia"
import ApiService from "../services/ApiService"

export const useDrinksStore = defineStore('drinks', () => {

    const categories = ref([])
    const search = reactive({
        name: '',
        category: '',
    })

    onMounted( async () =>{
        const {data: {drinks }} = await ApiService.getCategories()
        categories.value = drinks
    })

    function getRecipes() {
        console.log('Querying API...');
    }

    return {
        categories,
        search,
        getRecipes,
    }
})