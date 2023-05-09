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
    <div class="flex justify-center gap-2 mt-2">
      <router-link
        v-bind:to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        >{{ letter }}</router-link
      >
    </div>
    <Meals :meals="meals" />
  </div>
</template>
