import { cityGuess } from '../service/getData'
import { GET_DATA } from './mutation-types'

export default {
  getData({ commit, state }) {
    cityGuess().then(res => {
      commit(GET_DATA, {data: res})
    })
  }
}