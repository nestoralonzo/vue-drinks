import { ref, watch, onMounted, computed } from "vue"
import { defineStore } from "pinia"
import { useDrinksStore } from "./drinks"
import { useModalStore } from "./modal"
import { useNotificationStore } from "./notification"

export const useFavoritesStore = defineStore("favorites", () => {
  const drinks = useDrinksStore()
  const modalStore = useModalStore()
  const notification = useNotificationStore()

  const favorites = ref([])

  onMounted(() => {
    favorites.value = JSON.parse(localStorage.getItem("favorites")) ?? []
  })

  watch(
    favorites,
    () => {
      syncLocalStorage()
    },
    {
      deep: true,
    }
  )

  function syncLocalStorage () {
    localStorage.setItem("favorites", JSON.stringify(favorites.value))
  }

  function isFavorite(id) {
    const favoritesLocalStorage = JSON.parse(localStorage.getItem('favorites')) ?? []
    return favoritesLocalStorage.some(favorite => favorite.idDrink === id)
  }

  function deleteFavorite(id){
    favorites.value = favorites.value.filter(favorite => favorite.idDrink !== drinks.recipe.idDrink)
    notification.show = true
    notification.text = 'Remove from favorites'
    notification.error = false
  }

  function addFavorite(){
    favorites.value.push(drinks.recipe)
    notification.show = true
    notification.text = 'Added to favorites'
    notification.error = false
  }

  function handleClickFavorite () {
    if (isFavorite(drinks.recipe.idDrink)) {
        deleteFavorite()
    } else{
        addFavorite()
    }

    modalStore.modal = false
  }

  const isFavoritesEmpty = computed(() => favorites.value.length === 0)

  return {
    favorites,
    isFavoritesEmpty,
    handleClickFavorite,
    isFavorite,
  }
})
