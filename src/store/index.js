import { createStore } from 'vuex'
import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const store = createStore({
  actions,
  mutations,
  getters,
  state,
})

export default store
