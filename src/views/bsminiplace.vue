<template>
  <h2 class="title9">附屬場所出入口裝置設定</h2>
  <form class="id9">
    <label for="new-todo-input"> 輸入附屬場所ID: </label>
    <input type="text" name="mid" autocomplete="off" v-model="setdata.mid" />
    <br />
    <label for="new-todo-input"> 輸入附屬場所藍芽ID: </label>
    <input type="text" name="bmid" autocomplete="off" v-model="setdata.bmid" />
    <br />
    <label for="new-todo-input"> 出入口名稱: </label>
    <input style="width:70%"
      type="text"
      name="bmname"
      autocomplete="off"
      v-model="setdata.bmname"
    />
    <br />
    <div>
      <button class="update9" @click="onSubmit($event)">設定</button>
    </div>
  </form>
</template>
<style>
input {
  width: 50%;
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

.title9 {
  position: absolute;
  top: 100px;
  left: 50px;
  font-size: 25px;
}
.id9 {
  position: absolute;
  top: 20%;
  left: 5%;
  text-align: left;
  padding: 2%;
  border: rgb(15, 12, 9) 1px;
  border-radius: 5%;
  background-color: rgb(195, 210, 236);
  padding-bottom: 2cm;
}
.bid9 {
  position: absolute;
  top: 290px;
  left: 20%;
}
.gate9 {
  position: absolute;
  top: 340px;
  left: 20%;
}
.home9 {
  position: absolute;
  top: 180px;
  left: 70%;
  width: 55px;
  height: 35px;
  font-size: 10px;
}
.update9 {
  position: absolute;
  top: 190px;
  left: 45%;
  width: 55px;
  height: 35px;
  font-size: 10px;
}
</style>

// <script>
import { /*getPlaceList,*/ addbminiplace } from "../model/bminiplace";
//import {onMounted} from "vue";
var sendd = {
  mid: "",
  bmid: "",
  bmname: ""
};
export default {
  data() {
    return {
      setdata: {
        mid: "",
        bmid: "",
        bmname: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      let formData = JSON.stringify(this.setdata);
      console.log(formData);
      sendd.mid = this.setdata.mid;
      sendd.bmid = this.setdata.bmid;
      sendd.bmname = this.setdata.bmname;
      addbminiplace(sendd);
      console.log(88, sendd);
      alert('設定成功')
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