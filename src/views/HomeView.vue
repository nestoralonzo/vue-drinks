<script setup>
import Recipe from '../components/Recipe.vue'
import { useDrinksStore } from "../stores/drinks"

const drinkStore = useDrinksStore()
</script>

<template>
  <h1 class="text-6xl font-extrabold">Recipes</h1>
  <p
    v-if="drinkStore.isRecipesEmpty"
    class="my-10 text-center text-2xl"
  >
    No Recipes, search for recipes
  </p>
  <div
    v-else
    class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10"
  >
    <Recipe
        v-for="recipe in drinkStore.recipes"
        :recipe="recipe"
        :key="recipe.idDrink"
    >
    </Recipe>
  </div>
</template>
