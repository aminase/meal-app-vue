<script setup>
import { computed, onMounted, ref } from 'vue'
import axiosClient from '../axiosClient'

const ingredients = ref([])
const keyword = ref('')

const computedIngredienets = computed(() => {
  if (!computedIngredienets) return ingredients
  return ingredients.value.filter(i =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLocaleLowerCase())
  )
})

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list')
  ingredients.value = response.data.meals
})
</script>
<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <input
      v-focus
      v-model="keyword"
      type="text"
      class="rounded border-2 bg-white border-grey-200 w-full mb-3"
      placeholder="Search for ingredients"
      @change="searchMeals"
    />
    <router-link
      :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
      v-for="ingredient of computedIngredienets"
      :key="ingredient.idIngredient"
      class="block bg-white rounded p-3 mb-3 shadow"
    >
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
    <!-- <pre>{{ ingredients }}</pre> -->
  </div>
</template>
