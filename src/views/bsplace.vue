<template>
  <h2 class="title8">場所出入口裝置設定</h2>

  <form class="id8">
    <label for="new-todo-input"> 輸入場所ID: </label>
    <input type="text" name="id" autocomplete="off" v-model="formObj.id" />
    <br />
    <label for="new-todo-input"> 輸入藍芽ID: </label>
    <input type="text" name="bid" autocomplete="off" v-model="formObj.bid" />
    <br />
    <label for="new-todo-input"> 出入口名稱: </label>
    <input
      type="text"
      name="bname"
      autocomplete="off"
      v-model="formObj.bname"
    />
    <br />
   
    <div>
      <button class="update8" @click="onSubmit($event)">設定</button>
    </div>
  </form>
</template>
<style>
input {
  width: 65%;
  font-size: 17px;
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

.title8 {
  position: absolute;
  top: 65px;
  left: 100px;
}
.id8 {
  position: absolute;
  top: 20%;
  left: 11%;
  text-align: left;
  padding: 2%;
  border: rgb(15, 12, 9) 1px;
  border-radius: 5%;
  background-color: rgb(195, 210, 236);
  padding-bottom: 2cm;
}
.bid8 {
  position: absolute;
  top: 290px;
  left: 20%;
}
.gate8 {
  position: absolute;
  top: 340px;
  left: 20%;
}
.home8 {
  position: absolute;
  top: 190px;
  left: 70%;
  width: 55px;
  height: 35px;
  font-size: 10px;
}
.update8 {
  position: absolute;
  top: 190px;
  left: 50%;
  width: 55px;
  height: 35px;
  font-size: 10px;
}
</style>

// <script>
import { /*getPlaceList,*/ addbplace } from "../model/bplace";
//import {onMounted} from "vue";
var sendd = {
  id: "",
  bid: "",
  bname: "",
};
export default {
  data() {
    return {
      formObj: {
        id: "",
        bid: "",
        bname: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      let formData = JSON.stringify(this.formObj);
      console.log(formData);
      sendd.id = this.formObj.id;
      sendd.bid = this.formObj.bid;
      sendd.bname = this.formObj.bname;
      addbplace(sendd);
      console.log(88, sendd);
      alert("設定成功");
      setTimeout("location.href='/'", 500);
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