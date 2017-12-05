<template>
  <div>
		 <ul>
			<li v-for="(item,key) in getYiState" :key=key @mouseenter="addClassFun($event)" @mouseleave="removeClassFun($event)">
			  <span>{{item.dat}}</span><i>{{item.state==true?"已完成":""}}</i>
			</li>

		</ul>
  </div>
</template>

<script>
import { mapGetters,mapActions} from 'vuex'
export default {

  data () {
    return {
      
    }
  },
  methods:{
    addClassFun(evt){
      evt.target.className="current";
  	},
  	removeClassFun(evt){
      evt.target.className="";
  	}
  },
  computed:{
  	...mapGetters(["getYiState"])
  }
}
</script>

<style lang="scss">


</style>
