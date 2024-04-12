import { ref, computed } from 'vue'
import { defineStore } from "pinia"
import { useFavoritesStore } from './favorites'
import { useDrinksStore } from './drinks'

export const useModalStore = defineStore('modal', () => {

    const favoritesStore = useFavoritesStore()
    const drinksStore = useDrinksStore()

    const modal = ref(false)

    function handleClickModal() {
        modal.value = !modal.value
    }

    const buttonText = computed(() => {
        return favoritesStore.isFavorite(drinksStore.recipe.idDrink) ?
            'Remove from Favorites' :
            'Add to Favorites'
    })

    return {
        modal,
        handleClickModal,
        buttonText,
    }
})