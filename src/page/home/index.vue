<template>
  <div>
      <Headtop></Headtop>
  </div>
</template>

<script>
import {cityGuess} from '../../service/getData'
import Headtop from '../../components/header/head'

export default {
  components:{
    Headtop
  },
  created(){
    cityGuess().then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
      // this.$store.dispatch('getData')
  }
}
</script>

<style>

</style>
