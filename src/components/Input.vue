<template>
  <div>
    <input type="text" value="" class="inp" v-model="dat" ref="inp"><button class="btn" @click="commitFun(dat)">增加</button>

  </div>
</template>

<script>
import { mapActions} from 'vuex'

export default {

  data () {
    return {
       dat:""
    }
  },
  methods:{
  	commitFun(dat){
  		if(dat==""){
  		  return;
  		}
  		this.dat="";
		this.addDat(dat);
		this.$refs.inp.value="";
  	},
	...mapActions(["addDat"])
  }
 
}
</script>

<style lang="scss">


</style>
