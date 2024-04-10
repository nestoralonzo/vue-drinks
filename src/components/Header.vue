<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute()

const isHomePage = computed(() => route.name === 'home')

</script>

<template>
    <header
        class="bg-slate-800"
        :class="{ header: isHomePage}"
    >
        <div class="mx-auto container px-5 py-16">
            <div class="flex justify-between items-center">
                <div>
                    <RouterLink
                        :to="{name: 'home'}"
                    >
                        <img class="w-32" src="/img/logo.svg" alt="logo" />
                    </RouterLink>
                </div>
                <nav class="flex gap-4">
                    <RouterLink
                        :to="{name: 'home'}"
                        class="text-white uppercase font-bold"
                        active-class="text-orange-500"
                    >
                        Home
                    </RouterLink>
                    <RouterLink
                        :to="{name: 'favorites'}"
                        class="text-white uppercase font-bold"
                        active-class="text-orange-500"
                    >
                        Favorites
                    </RouterLink>
                </nav>
            </div>

            <form
                class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
                v-if="isHomePage"
            >
                <div class="space-y-8">
                    <label 
                        class="block text-white uppercase font-extrabold text-lg"
                        for="ingredient"
                    >Name or Ingredients</label>
                    <input
                        id="ingredient"
                        type="text" 
                        class="p-3 w-full rounded-lg focus:outline-none"
                        placeholder="Name or ingredientes: ej. Vodka, Tequila, etc."
                    />
                </div>

                <div class="space-y-8">
                    <label 
                        class="block text-white uppercase font-extrabold text-lg"
                        for="category"
                    >Category</label>
                    <select
                        id="category"
                        class="p-3 w-full rounded-lg focus:outline-none"
                    >
                        <option value="">-- Select --</option>
                    </select>
                </div>

                <input
                  type="submit"
                  class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold uppercase p-2 rounded-lg"
                  value="Find recipe"
                />
            </form>
        </div>

    </header>
</template>

<style>
    .header{
        background-image: url('/img/bg.jpg');
        background-size: cover;
        background-position: center;
    }
</style>
