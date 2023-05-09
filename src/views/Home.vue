<script setup>
import { computed, onMounted, ref } from 'vue'
import store from '../store'
import axiosClient from '../axiosClient.js'

const ingredients = ref([])

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list')
  // const responseData = response.data.meals
  ingredients.value = response.data
})
</script>

<template>
  <div class="flex flex-col p-8">
    <!-- <input
      v-focus
      type="text"
      class="rounded border-2 border-grey-200 w-full"
      placeholder="Search for meals"
    /> -->
    <!-- <pre>{{ letters }}</pre> -->

    <pre>{{ ingredients }}</pre>
  </div>
</template>
