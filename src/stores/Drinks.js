import { ref, reactive, onMounted } from 'vue'
import { defineStore } from "pinia"
import ApiService from "../services/ApiService"

export const useDrinksStore = defineStore('drinks', () => {

    const categories = ref([])
    const search = reactive({
        name: '',
        category: '',
    })
    const recipes = ref([])
    const selectedRecipe = reactive({})

    onMounted( async () =>{
        const {data: {drinks }} = await ApiService.getCategories()
        categories.value = drinks
    })

    async function searchRecipes() {
        const {data: {drinks}} = await ApiService.searchRecipes(search)
        recipes.value = drinks
    }

    async function selectRecipe(id) {
        const { data: {drinks}} = await ApiService.getRecipeById(id)
        Object.assign(selectedRecipe, drinks[0])
    }

    return {
        categories,
        search,
        searchRecipes,
        recipes,
        selectRecipe,
        selectedRecipe,
    }
})