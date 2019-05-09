import { GET_DATA2 } from '../../mutation-types'
import { cityGuess } from '../../../service/getData'

const state = {
  test2: null
}

const getters = {

}

const mutations = {
  [GET_DATA2] (state, {data}) {
    console.log(data)
    state.test2 = data
  }
}

const actions = {
  getData2({ commit, state }) {
    cityGuess().then(res => {
      commit(getData2, {data: res})
    })
  }
}