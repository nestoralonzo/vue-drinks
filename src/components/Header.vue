<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useDrinksStore } from '../stores/drinks'
import { useNotificationStore } from '@/stores/notification';

const route = useRoute()
const store = useDrinksStore()
const notification = useNotificationStore()

const isHomePage = computed(() => route.name === 'home')

const handleSubmit = () => {
    if (Object.values(store.search).includes('')) {
        // notification.text = 'All fields are required'
        // notification.show = true
        // notification.error = true

        notification.$patch({
            text: 'All fields are required',
            show: true,
            error: true
        })

        // notification.$state = {
        //     text: 'All fields are required',
        //     show: true,
        //     error: true
        // }
        
        return    
    }

    store.searchRecipes()
}
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

                <nav class="flex gap-4 text-white">
                    <RouterLink
                        :to="{name: 'home'}"
                        class="uppercase font-bold"
                        active-class="text-orange-500"
                    >
                        Home
                    </RouterLink>

                    <RouterLink
                        :to="{name: 'favorites'}"
                        class="uppercase font-bold"
                        active-class="text-orange-500"
                    >
                        Favorites
                    </RouterLink>
                </nav>
            </div>

            <form
                v-if="isHomePage"
                class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
                @submit.prevent="handleSubmit"
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
                        v-model="store.search.name"
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
                        v-model="store.search.category"
                    >
                        <option value="">-- Select --</option>
                        <option 
                            v-for="category in store.categories"
                            :key="category.strCategory"
                            :value="category.strCategory"
                        > {{ category.strCategory }} </option>
                    </select>
                </div>

                <input
                  type="submit"
                  class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold uppercase w-full p-2 rounded-lg"
                  value="Search recipe"
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