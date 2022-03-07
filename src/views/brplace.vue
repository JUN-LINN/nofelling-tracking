<template>
  <h2 class="title1">場所出入口裝置註冊</h2>
  <form class="id1">
    <label for="new-todo-input"> 輸入場所ID: </label>
    <input type="text" name="id" autocomplete="off" v-model="formObj.id" />
    <br />
    <label for="new-todo-input"> 裝置數量: </label>
    <input type="text" name="num" autocomplete="off" v-model="formObj.num" />
    <br />
    <label for="new-todo-input"> 寄送地址: </label>
    <input
      type="text"
      name="con_address"
      autocomplete="off"
      v-model="formObj.con_address"
    /><br />
    <div>
      <button class="home1" value="/bHome.vue" @click="onSubmit($event)">
        送出
      </button>
    </div>
  </form>
</template>
<style>
label {
  font-size: 18px;
  margin-top: 1cm;
}

input {
  font-size: 16px;
  margin-top: 1cm;
  border-bottom: 1px solid;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: rgb(195, 210, 236);
}

.title1 {
  position: absolute;
  top: 100px;
  left: 70px;
  font-size: 25px;
}
.id1 {
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
.num1 {
  position: absolute;
  top: 230px;
  left: 23%;
}
.delivery1 {
  position: absolute;
  top: 280px;
  left: 23%;
}
.home1 {
  position: absolute;
  top: 210px;
  left: 70%;
  width: 55px;
  height: 35px;
  font-size: 10px;
}
</style>

// <script>
import { /*getPlaceList,*/ addbrplace } from "../model/brplace";
//import {onMounted} from "vue";
var sendd = {
  id: "",
  num: "",
  con_address: "",
};
export default {
  data() {
    return {
      formObj: {
        id: "",
        num: "",
        con_address: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      let formData = JSON.stringify(this.formObj);
      console.log(formData);
      sendd.id = this.formObj.id;
      sendd.num = this.formObj.num;
      sendd.con_address = this.formObj.con_address;
      addbrplace(sendd);
      console.log(88, sendd);
      alert("註冊成功");
      setTimeout("location.href='/bHome'", 500);
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