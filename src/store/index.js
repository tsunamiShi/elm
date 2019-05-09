import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations' // 全局mutations
import actions from './action'  // 全局actions
import getters from './getters' // 全局getters
import checkout from './modules/checkout' // checkout 模块

Vue.use(Vuex) 

const state = {
  test1: null
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    checkout
  }
})