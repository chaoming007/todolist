<template>
  <div>
    <div class="tab-list">
      <router-view></router-view>
    </div>
    <div class="tab-nav">
    	<ul>
    		<li>
    			<router-link to="/">全部</router-link>
    		</li>
    		<li>
    			<router-link to="/weiwancheng">未完成</router-link>
    		</li>
    		<li>
    			<router-link to="/yiwancheng">已完成</router-link>
    		</li>
    	</ul>
    </div>

  </div>
</template>

<script>
export default {

  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">


</style>
