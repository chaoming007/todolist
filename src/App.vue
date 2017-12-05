<template>
  <div id="app" class="main-box">
       <div class="input-sty">
         <Inp />
       </div>
       <div class="list-box">
          <List />
       </div>

  </div>
</template>

<script>
import Inp from './components/Input.vue'
import List from './components/List.vue'
export default {

  data () {
    return {
      
    }
  },
  components:{
     Inp,
     List
  }
}
</script>

<style lang="scss">


</style>
