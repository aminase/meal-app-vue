<script setup>
import { onMounted, ref, computed } from 'vue'
import axiosClient from '../axiosClient'
import { useRoute } from 'vue-router'
import store from '../store'
import Meals from '../components/Meals.vue'

const route = useRoute()
const meals = computed(() => store.state.mealsByIngredient)
const ingredient = computed(() => store.state.ingredient)

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
console.log(ingredient, 'inggg')
</script>

<template>
  <div>
    <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4 text-orange-400">
        Meals for {{ ingredient.strIngredient }}
      </h1>
    </div>
    <Meals :meals="meals" />
  </div>
</template>
