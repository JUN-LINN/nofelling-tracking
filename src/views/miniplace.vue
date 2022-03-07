<template>
  <h2 class="title7">附屬場所-場所資料</h2>
  <a
    href="javascript:void(0)"
    onclick="document.getElementById('lightmini').style.display='block';document.getElementById('fademini').style.display='block'"
    ><button class="comment-mini">i</button></a
  >
  <div id="lightmini" class="explanationmini">
    <p>註:聯絡地址為您收取出入口裝置的地址， 請務必填寫有人收件的地址。</p>
    <a
      href="javascript:void(0)"
      onclick="document.getElementById('lightmini').style.display='none';document.getElementById('fademini').style.display='none'"
      class="xmini"
      >X</a
    >
  </div>
  <form class="pid7">
    <label for="new-todo-input"> 場所ID: </label>
    <input type="text" name="id" autocomplete="off" v-model="formObj.id" />
    <br /><br />
    <label for="new-todo-input"> 附屬場所名稱: </label>
    <input
      type="text"
      name="mname"
      autocomplete="off"
      v-model="formObj.mname"
    />
    <br /><br />
    <label for="new-todo-input"> 附屬場所負責人身分證: </label>
    <input
      style="width: 50%"
      type="text"
      name="mleaderid"
      autocomplete="off"
      v-model="formObj.mleaderid"
    />
    <br /><br />
    <label for="new-todo-input"> 附屬場所負責人手機: </label>
    <input
      type="text"
      name="mcellphone"
      autocomplete="off"
      v-model="formObj.mcellphone"
    />
    <br /><br />
    <label for="new-todo-input"> 附屬場所電話: </label>
    <input
      type="text"
      name="mtelephone"
      autocomplete="off"
      v-model="formObj.mtelephone"
    />
    <br /><br />
    <label for="new-todo-input"> 附屬場所聯絡地址: </label>
    <input
      type="text"
      name="mcon_address"
      autocomplete="off"
      v-model="formObj.mcon_address"
    />
    <br /><br />
    <label for="new-todo-input"> 統一編號: </label>
    <input
      style="width: 7cm"
      type="text"
      name="mtax"
      autocomplete="off"
      v-model="formObj.mtax"
      placeholder="法人請輸入統編，非法人請填null"
    />

    <div>
      <button
        class="send7"
        type="submit"
        value="/miniHome.vue"
        @click="onSubmit($event)"
      >
        送出
      </button>
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

.title7 {
  position: absolute;
  top: 65px;
  left: 100px;
}
.pid7 {
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

.taxadd5 {
  position: absolute;
  top: 380px;
  left: 60px;
}
.send7 {
  position: absolute;
  top: 500px;
  right: 100px;
  width: 50px;
  height: 30px;
  font-size: 15px;
}
.comment-mini {
  border: radius 50%;
  font-size: 20px;
  position: absolute;
  top: 11%;
  right: 10%;
  border-radius: 50%;
  width: 25px;
  height: 25px;
}

.explanationmini {
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
.xmini {
  position: absolute;
  top: 5%;
  right: 5%;
  text-decoration: none;
  color: black;
}

.taxwidth5 {
  width: 250px;
}
</style>



// <script>
import { /*getPlaceList,*/ addminiplace } from "../model/miniplace";
//import {onMounted} from "vue";
var sendd = {
  id: "",
  mname: "",
  mleaderid: "",
  mcellphone: "",
  mtelephone: "",
  mcon_address: "",
  mtax: "",
};
export default {
  data() {
    return {
      formObj: {
        id: "",
        mname: "",
        mleaderid: "",
        mcellphone: "",
        mtelephone: "",
        mcon_address: "",
        mtax: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      let formData = JSON.stringify(this.formObj);
      console.log(formData);
      sendd.mid = Math.random().toString(36).slice(-8);
      sendd.id = this.formObj.id;
      sendd.mname = this.formObj.mname;
      sendd.mleaderid = this.formObj.mleaderid;
      sendd.mcellphone = this.formObj.mcellphone;
      sendd.mtelephone = this.formObj.mtelephone;
      sendd.mcon_address = this.formObj.mcon_address;
      sendd.mtax = this.formObj.mtax;
      addminiplace(sendd);
      console.log(88, sendd);
      alert("註冊成功");
      setTimeout("location.href='/miniHome'", 500);
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