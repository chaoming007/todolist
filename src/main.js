import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'

import Weiwancheng from './components/Weiwancheng.vue'
import Yiwancheng from './components/Yiwancheng.vue'
import All from './components/All.vue'

Vue.use(VueRouter)
Vue.use(Vuex)


const store=new Vuex.Store({
   state:{
   	 id:0,
   	 dat:[]
   },
   mutations:{
   	 changeState(state,dat){     //改变状态
		state.dat.forEach((item)=>{	
			if(item.id==dat.id){
			  item.state=true;
			}
		})
   	 },
   	 addDat(state,dat){         //增加数据
   	 	state.id++;
		state.dat.push({id:state.id,dat,state:false});
   	 },
   	 delDat(state){      //删除数据

   	 }
   },
   actions:{
		changeState({commit},dat){
			commit("changeState",dat);
		},
		addDat({commit},dat){
			commit("addDat",dat);
		},
		delDat({commit}){
			commit("delDat");
		}
   },
   getters:{
   	  getAllState(state){     //全部数据
         return state.dat;
   	  },
   	  getYiState(state){      //已经完成
   	  	let dat=[];
   	  	dat=state.dat.filter((item)=>{
			return item.state==true;
   	  	})
   	  	return dat;
   	  },
   	  getWeiState(state){      //未完成
   	  	let dat=[];
   	  	dat=state.dat.filter((item)=>{
			return item.state==false;
   	  	})
   	  	return dat;
   	  }
   }


})

const routes=[
  {
  	path:"/",
  	component:All
  },
  {
  	path:"/weiwancheng",
  	component:Weiwancheng
  },
  {
  	path:"/yiwancheng",
  	component:Yiwancheng
  }

];
const router=new VueRouter({
  routes,
  mode:"history",
  linkExactActiveClass:"current"
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
