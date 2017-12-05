<template>
  <div>
	   <ul>
			<li v-for="(item,key) in getWeiState" :key=key @mouseenter="addClassFun($event)" @mouseleave="removeClassFun($event)">
			  <span>{{item.dat}}<i>{{item.state==false?"(未完成)":""}}</i></span><em @click="changeState(item)">完成</em>
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
  	},
  	...mapActions(["changeState"])
  },
  computed:{
  	...mapGetters(["getWeiState"])
  }
}
</script>

<style lang="scss">


</style>
