<template>
  <h2 class="title6">含有附屬場所之地-場所資料</h2>
  <a
    href="javascript:void(0)"
    onclick="document.getElementById('lightp').style.display='block';document.getElementById('fadep').style.display='block'"
    ><button class="comment-p">i</button></a
  >
  <div id="lightp" class="explanationp">
    <p>註:聯絡地址為您收取出入口裝置的地址， 請務必填寫有人收件的地址。</p>
    <a
      href="javascript:void(0)"
      onclick="document.getElementById('lightp').style.display='none';document.getElementById('fadep').style.display='none'"
      class="xp"
      >X</a
    >
  </div>
  <form class="name6">
    <label for="new-todo-input"> 場所名稱: </label>
    <input
      type="text"
      name="name"
      autocomplete="off"
      v-model="placedata.name"
    />
    <br /><br />
    <label for="new-todo-input"> 場所負責人身分證: </label>
    <input
      type="text"
      name="leaderid"
      autocomplete="off"
      v-model="placedata.leaderid"
    />
    <br /><br />
    <label for="new-todo-input"> 場所負責人手機: </label>
    <input
      type="text"
      name="cellphone"
      autocomplete="off"
      v-model="placedata.cellphone"
    />
    <br /><br />
    <label for="new-todo-input"> 場所電話: </label>
    <input
      type="text"
      name="telephone"
      autocomplete="off"
      v-model="placedata.telephone"
    />
    <br /><br />
    <label for="new-todo-input"> 場所地址: </label>
    <input
      type="text"
      name="address"
      autocomplete="off"
      v-model="placedata.address"
    />
    <br /><br />
    <label for="new-todo-input"> 聯絡地址: </label>
    <input
      type="text"
      name="con_address"
      autocomplete="off"
      v-model="placedata.con_address"
    />
    <br /><br />
    <label for="new-todo-input"> 統一編號: </label>
    <input
      type="text"
      name="tax"
      autocomplete="off"
      v-model="placedata.tax"
      class="taxwidth3"
      placeholder="法人請輸入統編，非法人請填null"
    />
    <br /><br />
    <label for="new-todo-input"> 場所類型: </label>
    <input
      type="text"
      name="type"
      autocomplete="off"
      value="具附屬場所之地"
      class="taxwidth"
      readonly
    />

    <div>
      <button
        class="send6"
        type="submit"
        value="/Homenext.vue"
        @click="onSubmit($event)"
      >
        送出
      </button>
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
.title6 {
  position: absolute;
  top: 65px;
  left: 42px;
}
.name6 {
  position: absolute;
  top: 25%;
  left: 5%;
  text-align: left;
  padding: 2%;
  border: rgb(15, 12, 9) 1px;
  border-radius: 5%;
  background-color: rgb(195, 210, 236);
  padding-bottom: 2cm;
}

.taxadd3 {
  position: absolute;
  top: 410px;
  left: 60px;
}
.taxwidth3 {
  position: absolute;
  left: 70px;
  width: 250px;
}

.send6 {
  position: absolute;
  top: 470px;
  right: 90px;
  width: 50px;
  height: 30px;
  font-size: 15px;
}
.comment-p {
  border: radius 50%;
  font-size: 20px;
  position: absolute;
  top: 15%;
  right: 10%;
  border-radius: 50%;
  width: 25px;
  height: 25px;
}

.explanationp {
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
.xp {
  position: absolute;
  top: 5%;
  right: 5%;
  text-decoration: none;
  color: black;
}
</style>
// <script>
import { /*getPlaceList,*/ addplace } from "../model/place";
//import {onMounted} from "vue";
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
        address: "",
        con_address: "",
        tax: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      let formData = JSON.stringify(this.placedata);
      console.log(formData);
      sendd.name = this.placedata.name;
      sendd.leaderid = this.placedata.leaderid;
      sendd.cellphone = this.placedata.cellphone;
      sendd.telephone = this.placedata.telephone;
      sendd.address = this.placedata.address;
      sendd.con_address = this.placedata.con_address;
      sendd.tax = this.placedata.tax;
      sendd.id = Math.random().toString(36).slice(-8);
      sendd.type = "具附屬場所之地";
      addplace(sendd);
      console.log(88, sendd);
      alert("註冊成功");
      setTimeout("location.href='/Homenext'", 500);
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