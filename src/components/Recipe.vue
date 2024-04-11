<script setup>
    defineProps({
        recipe:{
            type: Object
        }
    })
</script>

<template>
    <div class="border shadow-lg">
        <div class="overflow-hidden">
            <img 
                class="hover:scale-125 transition-transform hover:rotate-2"
                :src="recipe.strDrinkThumb"
                :alt="`${recipe.strDrink} image` "
            />
        </div>

        <div class="p-5">
            <h2 class="text-2xl truncate font-extrabold">{{ recipe.strDrink }}</h2>
            <button
                type="button"
                class="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
            >
                View Recipe
            </button>
        </div>
    </div>
</template>
