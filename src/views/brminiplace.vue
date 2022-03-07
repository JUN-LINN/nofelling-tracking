<template>
  <h2 class="title2">附屬場所出入口裝置註冊</h2>
  <form class="id2">
    <label for="new-todo-input"> 輸入附屬場所ID: </label>
    <input
      type="text"
      name="mid"
      autocomplete="off"
      v-model="placedata.mid"
      style="width: 50%"
    />
    <br />
    <label for="new-todo-input"> 裝置數量: </label>
    <input type="text" name="mnum" autocomplete="off" v-model="placedata.mnum" />
    <br />

    <label for="new-todo-input"> 寄送地址: </label>
    <input
      type="text"
      name="mcon_address"
      autocomplete="off"
      v-model="placedata.mcon_address"
    />

    <br />
    <div>
      <button
        class="home2"
        value="/bmHome.vue"
        @click="onSubmit($event)"
      >
        送出
      </button>
    </div>
  </form>
</template>

<style>
input {
  font-size: 16px;
  margin-top: 0.8cm;
  border-bottom: 1px solid;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: rgb(195, 210, 236);
}

label {
  margin-top: 0.8cm;
}

button {
  margin-top: 0.8cm;
}

.title2 {
  position: absolute;
  top: 100px;
  left: 70px;
  font-size: 25px;
}
.id2 {
  position: absolute;
  top: 20%;
  left: 10%;
  text-align: left;
  padding: 2%;
  border: rgb(15, 12, 9) 1px;
  border-radius: 5%;
  background-color: rgb(195, 210, 236);
  padding-bottom: 2cm;
}
.num2 {
  position: absolute;
  top: 230px;
  left: 23%;
}
.delivery2 {
  position: absolute;
  top: 280px;
  left: 23%;
}
.home2 {
  position: absolute;
  top: 160px;
  left: 70%;
  width: 55px;
  height: 35px;
  font-size: 10px;
}
</style>

// <script>
import { /*getPlaceList,*/ addbrminiplace } from "../model/brminiplace";
//import {onMounted} from "vue";
var sendd = {
  mid: "",
  mnum: "",
  mcon_address: "",
  bmid:Math.random().toString(36).slice(-8)
};
export default {
  data() {
    return {
      placedata: {
        mid: "",
        mnum: "",
        mcon_address: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      let formData = JSON.stringify(this.placedata);
      console.log(formData);
      sendd.mid = this.placedata.mid;
      sendd.mnum = this.placedata.mnum;
      sendd.mcon_address = this.placedata.mcon_address;
      addbrminiplace(sendd);
      // addbrminiplace()
      console.log(88, sendd);
      alert("uuu")
    },
  },
  //setup(){
  //onMounted(async()=>{
  //await addplace(sendd).then((res)=>{
  //console.log(333,res);
  //});
  //});

  //}
};
</script>