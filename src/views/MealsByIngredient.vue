<script setup>
import { onMounted, ref, computed } from 'vue'
import axiosClient from '../axiosClient'
import { useRoute } from 'vue-router'
import store from '../store'
import Meals from '../components/Meals.vue'

const route = useRoute()
const ingredients = ref([])
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
})

console.log(ingredients, 'ing')
</script>

<template>
  <Meals :meals="meals" />
</template>
