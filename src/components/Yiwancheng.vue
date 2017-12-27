<template>
  <div>
		 <ul>
			<li v-for="(item,key) in getYiState" :key=key @mouseenter="addClassFun($event)" @mouseleave="removeClassFun($event)">
			  <span>{{item.dat}}<i class="current">{{item.state==true?"(已完成测试)":""}}</i></span>
        <em @click="delDat(item)">删除</em>
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
    ...mapActions(["delDat"])
  },
  computed:{
  	...mapGetters(["getYiState"])
  }
}
</script>

<style lang="scss">


</style>
