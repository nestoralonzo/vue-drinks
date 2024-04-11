import { ref, reactive, onMounted } from 'vue'
import { defineStore } from "pinia"
import ApiService from "../services/ApiService"
import { useModalStore } from "./modal"

export const useDrinksStore = defineStore('drinks', () => {

    const modal = useModalStore()

    const categories = ref([])
    const search = reactive({
        name: '',
        category: '',
    })
    const recipes = ref([])
    const recipe = ref({})

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
        recipe.value = drinks[0]

        modal.handleClickModal()
    }

    return {
        categories,
        recipe,
        recipes,
        search,
        searchRecipes,
        selectRecipe,
    }
})