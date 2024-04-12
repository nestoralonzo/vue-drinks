<script setup>
import { useFavoritesStore } from "@/stores/favorites"
import Recipe from "@/components/Recipe.vue";

const favoritesStore = useFavoritesStore()
</script>

<template>
  <h1 class="text-6xl font-extrabold">Favorites</h1>
  <p
    v-if="favoritesStore.isFavoritesEmpty"
    class="my-10 text-center text-2xl"
  >
    No favorites
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
    <Recipe
      v-for="recipe in favoritesStore.favorites"
      :recipe="recipe"
      :key="recipe.idDrink"
    >
    </Recipe>
  </div>
</template>
