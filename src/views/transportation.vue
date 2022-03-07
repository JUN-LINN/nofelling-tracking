<template>
  <h2 class="title5">交通工具-場所資料</h2>
  <a
    href="javascript:void(0)"
    onclick="document.getElementById('lightt').style.display='block';document.getElementById('fadet').style.display='block'"
    ><button class="comment-t">i</button></a
  >
  <div id="lightt" class="explanationt">
    <p>註:聯絡地址為您收取出入口裝置的地址， 請務必填寫有人收件的地址。</p>
    <a
      href="javascript:void(0)"
      onclick="document.getElementById('lightt').style.display='none';document.getElementById('fadet').style.display='none'"
      class="xt"
      >X</a
    >
  </div>
  <form>
    <div class="pid5">
      <label for="new-todo-input"> 場所名稱: </label>
      <input        type="text"        name="name"        autocomplete="off"        v-model="placedata.name"/><br /><br />
      <label for="new-todo-input"> 場所負責人身分證: </label>
      <input        type="text"        name="leaderid"        autocomplete="off"        v-model="placedata.leaderid"/><br /><br />
      <label for="new-todo-input"> 場所負責人手機: </label>
      <input        type="text"        name="cellphone"        autocomplete="off"        v-model="placedata.cellphone"/><br /><br />
      <label for="new-todo-input"> 場所電話: </label>
      <input        type="text"        name="telephone"        autocomplete="off"        v-model="placedata.telephone"      /><br /><br />
      <label for="new-todo-input"> 車牌/編號: </label>
      <input        type="text"        name="carnumber"        autocomplete="off"        v-model="placedata.carnumber"/><br /><br />
      <label for="new-todo-input"> 聯絡地址: </label>
      <input        type="text"        name="con_address"        autocomplete="off"        v-model="placedata.con_address"/><br /><br />
      <label for="new-todo-input"> 統一編號: </label>
      <input        type="text"        name="tax"        autocomplete="off"        v-model="placedata.tax"        placeholder="法人請輸入統編，非法人請填null"/>
      <br /><br />
      <label for="new-todo-input">場所類型: </label>
      <input        type="text"        name="type"        autocomplete="off"        value="交通工具"        class="taxwidth"        readonly      />
    </div>

    <div class="btn">
      <button        class="send5"        type="submit"        value="/Homenext.vue"        @click="onSubmit($event)">送出</button>
    </div>
  </form>
</template>

<style>
label {
  margin-top: 0.5cm;
}

input {
  font-size: 16px;
  margin-top: 0.5cm;
  border-bottom: 1px solid;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: rgb(195, 210, 236);
}

.title5 {
  position: absolute;
  top: 65px;
  left: 100px;
}
.pid5 {
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
.send5 {
  position: absolute;
  top: 470px;
  right: 90px;
  width: 50px;
  height: 30px;
  font-size: 15px;
}
.comment-t {
  border: radius 50%;
  font-size: 20px;
  position: absolute;
  top: 11%;
  right: 10%;
  border-radius: 50%;
  width: 25px;
  height: 25px;
}
.btn {
  position: absolute;
  top: 180px;
  right: 5px;
}

.typee3 {
  position: absolute;
  top: 450px;
  left: 60px;
  width: 250px;
}
.explanationt {
  display: none;
  position: absolute;
  padding-top: 3%;
  top: 40%;
  left: 1.5%;
  border: 1px solid rgba(172, 184, 218, 0.548);
  border-radius: 10px;
  background-color: white;
  z-index: 1002;
  overflow: auto;
  text-align: center;
  font-size: 20px;
  word-wrap: break-word;
}
.xt {
  position: absolute;
  top: 5%;
  right: 5%;
  text-decoration: none;
  color: black;
}
</style>
// <script>
import { /*getPlaceList,*/ addplace } from "../model/place";
// import {onMounted} from "vue";
var sendd = {
  name: "",
  leaderid: "",
  cellphone: "",
  telephone: "",
  address: "",
  con_address: "",
  tax: "",
  type: "",
  carnumber: "",
  id: "",
};
export default {
  data() {
    return {
      placedata: {
        name: "",
        leaderid: "",
        cellphone: "",
        telephone: "",
        carnumber: "",
        address: "",
        tax: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      let formData = JSON.stringify(this.placedata);
      console.log(191, formData);
      sendd.name = this.placedata.name;
      sendd.leaderid = this.placedata.leaderid;
      sendd.cellphone = this.placedata.cellphone;
      sendd.telephone = this.placedata.telephone;
      sendd.carnumber = this.placedata.carnumber;
      sendd.address = this.placedata.address;
      sendd.tax = this.placedata.tax;
      sendd.id = Math.random().toString(36).slice(-8);
      sendd.type = "交通工具";
      addplace(sendd);
      console.log(88, sendd);
      alert("註冊成功");
      setTimeout("location.href='/Homenext'", 500);
    },
  },
  // setup(){
  //   onMounted(async()=>{
  //   await addplace(sendd).then((res)=>{
  //     console.log(333,res);
  //   });
  //   });

  // }
};
</script>