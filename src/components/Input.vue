<template>
  <div>
    <input type="text" value="" class="inp" v-model="dat.dat" ref="inp"><button class="btn" @click="commitFun(dat)">{{!!dat.id?"编辑":"增加"}}</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      defaultDat:{ dat:"",btnTxt:0,id:null}
    };
  },
  methods: {
    commitFun(dat) {
      if (dat.dat == "") {
        return;
      }
      this.addDat(dat);
      this.dat.dat = "";
      this.dat.id=false;
      this.dat.state=true;
      this.$refs.inp.value = "";
    },
    ...mapActions(["addDat"])
  },
  computed: {
    dat(){
      return this.getEditState?this.getEditState:this.defaultDat;
    },
    ...mapGetters(["getEditState"])
  }
};
</script>

