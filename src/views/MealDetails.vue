<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axiosClient from '../axiosClient'
import YouTubeButton from '../components/YouTubeButton.vue'

const route = useRoute()
const meal = ref({})

onMounted(async () => {
  try {
    const response = await axiosClient.get(`/lookup.php?i=${route.params.id}`)
    meal.value = response.data.meals
  } catch (err) {
    console.log(err)
  }
})
</script>
<template>
  <div>
    <div v-for="me of meal" :key="me.idMeal" class="max-w-[800px] mx-auto p-8">
      <h1 class="text-5xl font-bold mb-5">{{ me.strMeal }}</h1>
      <img :src="me.strMealThumb" :alt="me.strMeal" class="max-w-[100%strSource]" />
      <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
        <div><strong class="font-bold">Category:</strong> {{ me.strCategory }}</div>
        <div><strong class="font-bold">Area:</strong>{{ me.strArea }}</div>
        <div><strong class="font-bold">Tags:</strong>{{ me.strTags }}</div>
      </div>
      <div class="my-3">{{ me.strInstructions }}</div>
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <h2 class="text-2xl font-semibold mb-3">Ingredients:</h2>
          <ul>
            <template v-for="(el, index) of new Array(20)">
              <li v-if="me[`strIngredient${index + 1}`]" :key="index">
                {{ index + 1 }}. {{ me[`strIngredient${index + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-3">Measures:</h2>
          <ul>
            <template v-for="(el, index) of new Array(20)">
              <li v-if="!Object.keys(me[`strMeasure${index + 1}`]).length" :key="index">
                {{ index + 1 }}. {{ me[`strMeasure${index + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div class="mt-3">
          <YouTubeButton :href="meal.strYoutube"> Go to YouTube</YouTubeButton>
          <a
            :href="meal.strSource"
            target="_blank"
            class="ml-3 px-2 py-2 rounded border border-transparent text-indigo-600 transitions-colors"
            >View Original Source</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
