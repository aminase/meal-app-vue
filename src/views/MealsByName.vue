<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axiosClient from '../axiosClient'
import YouTubeButton from '../components/YouTubeButton.vue'
import MealItem from '../components/MealItem.vue'
import store from '../store'
import Meals from '../components/Meals.vue'

const keyword = ref('')
const route = useRoute()

function searchMeals() {
  if (keyword.value) {
    store.dispatch('searchMeals', keyword.value)
    // axiosClient.get(`/search.php?s=${keyword.value}`)
  } else {
    store.commit('setSearchedMeals', [])
  }
}

const meals = computed(() => store.state.searchedMeals)

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})
</script>
<template>
  <div>
    <div class="p-8 pb-0">
      <input
        v-focus
        v-model="keyword"
        type="text"
        class="rounded border-2 bg-white border-grey-200 w-full"
        placeholder="Search for meals"
        @change="searchMeals"
      />
    </div>
    <Meals :meals="meals" />
  </div>
</template>
