<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted, watch } from 'vue'
import store from '../store'
import MealItem from '../components/MealItem.vue'
import Meals from '../components/Meals.vue'

const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>

<template>
  <div>
    <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4 text-orange-400">Meals by Letter</h1>
    </div>
    <div class="flex flex-wrap justify-center gap-3 px-8">
      <router-link
        v-bind:to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
        >{{ letter }}</router-link
      >
    </div>
    <Meals :meals="meals" />
  </div>
</template>
