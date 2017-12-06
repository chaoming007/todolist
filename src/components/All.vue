<template>
  <div>
     <ul>
      <li v-for="(item,key) in getAllState" :key=key @mouseenter="addClassFun($event)" @mouseleave="removeClassFun($event)">
        <span>{{item.dat}}<i :class="{current:item.state}">{{item.state==false?"(未完成)":"(已完成)"}}</i></span>
        <em v-if="item.state==false" @click="changeState(item)">完成</em>
        <em v-else @click="delDat(item)">删除</em>
      </li>

    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    addClassFun(evt) {
      evt.target.className = "current";
    },
    removeClassFun(evt) {
      evt.target.className = "";
    },
    ...mapActions(["changeState","delDat"])
  },
  computed: {
    ...mapGetters(["getAllState"])
  }
};
</script>

<style lang="scss">

</style>
