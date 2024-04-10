import { ref, onMounted } from 'vue'
import { defineStore } from "pinia"
import axios from 'axios'

export const useDrinksStore = defineStore('drinks', () => {

    const categories = ref([])

    onMounted( async () =>{
        const {data: {drinks }} = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        categories.value = drinks
    })

    return {
        categories
    }
})