import axiosClient from '../axiosClient'

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`/search.php?s=${keyword}`).then(({ data }) => {
    // debugger ---> used for breakpointing the app
    commit('setSearchedMeals', data.meals) //commiting mutations name
  })
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`/search.php?f=${letter}`).then(({ data }) => {
    // debugger ---> used for breakpointing the app
    commit('setMealsByLetter', data.meals) //commiting mutations name
  })
}

export function searchMealsByIngredient({ commit }, ingredient) {
  axiosClient.get(`/filter.php?i=${ingredient}`).then(({ data }) => {
    // debugger ---> used for breakpointing the app
    commit('setMealsByIngredients', data.meals) //commiting mutations name
  })
}
