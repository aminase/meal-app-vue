<script setup>
import YouTubeButton from '../components/YouTubeButton.vue'
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
})
</script>
<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl h-48 w-full object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua."
      </p>
      <div>
        <YouTubeButton :href="meal.strYoutube">You Tube</YouTubeButton>
      </div>
    </div>
  </div>
</template>
