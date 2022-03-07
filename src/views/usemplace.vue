<template>
  <div class="miniplace">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <p>id:{{ placedata.mid }}</p>
    <p>name:{{ placedata.mname }}</p>
    <p>cellphone:{{ placedata.mcellphone }}</p> -->
    <form action="" class="update">
      場所ID：
      <input
        type="text"
        name="id"
        autocomplete="off"
        v-bind:value="placedata.id"
        @input="placedata.id = $event.target.value"
      /><br />
      附屬場所ID：
      <input
        type="text"
        name="mid"
        autocomplete="off"
        v-bind:value="placedata.mid"
        readonly
        @input="placedata.mid = $event.target.value"
      /><br />
      場所名稱：
      <input
        type="text"
        name="name"
        autocomplete="off"
        v-bind:value="placedata.mname"
        @input="placedata.mname = $event.target.value"
      /><br />
      場所負責人身分證：
      <input
        type="text"
        name="leaderid"
        autocomplete="off"
        v-bind:value="placedata.mleaderid"
        @input="placedata.mleaderid = $event.target.value"
      /><br />
      場所負責人手機：
      <input
        type="text"
        name="cellphone"
        autocomplete="off"
        v-bind:value="placedata.mcellphone"
        @input="placedata.mcellphone = $event.target.value"
      /><br />
      統一編號：
      <input
        type="text"
        name="tax"
        autocomplete="off"
        v-bind:value="placedata.mtax"
        @input="placedata.mtax = $event.target.value"
      /><br />
      聯絡地址：
      <input
        type="text"
        name="con_address"
        autocomplete="off"
        v-bind:value="placedata.mcon_address"
        @input="placedata.mcon_address = $event.target.value"
      /><br />
      場所電話：
      <input
        type="text"
        name="telephone"
        autocomplete="off"
        v-bind:value="placedata.mtelephone"
        @input="placedata.mtelephone = $event.target.value"
      /><br />

      <button type="submit" @click="onUpdate($event)" class="send3">
        更新
      </button>
      <button type="submit" @click="onDelete($event)" class="senddelete">
        刪除
      </button>
    </form>
  </div>
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

.update {
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

.send3 {
  /* padding-top: 20px; */
  position: absolute;
  margin-top: 0.5cm;
  left: 200px;
  width: 50px;
  height: 30px;
  font-size: 15px;
}

.senddelete {
  position: absolute;
  margin-top: 0.5cm;
  left: 250px;
  width: 50px;
  height: 30px;
  font-size: 15px;
  margin-left: 0.5cm;
}
</style>


<script>
import { onMounted, reactive } from "vue";
import {
  getminiPlace,
  deleteminiPlace,
  updateminiPlace,
} from "../model/miniplace.js";
import { useRoute } from "vue-router";
var sendd = {
  id: "",
  name: "",
  mid:"",
  // Status: "",
  // address: "",
  // type: "",
  leaderid: "",
  cellphone: "",
  tax: "",
  con_address: "",
  telephone: "",
  // carnumber: "",
};

export default {
  name: "miniplace",
 
  methods: {
    onUpdate(event) {
      event.preventDefault();
      // event.once();
      let formData = JSON.stringify(this.placedata);
      console.log(74, formData);
      sendd.id = this.placedata.id;
      sendd.mid = this.placedata.mid;
      sendd.name = this.placedata.mname;
      sendd.leaderid = this.placedata.mleaderid;
      sendd.cellphone = this.placedata.mcellphone;
      sendd.tax = this.placedata.mtax;
      sendd.con_address = this.placedata.mcon_address;
      sendd.telephone = this.placedata.mtelephone;
      // console.log(69,this.placedata.id);
      console.log(70, sendd);
      // addplace(sendd)
      updateminiPlace(sendd);
      alert('修改成功')
    },
    onDelete(event) {
      event.preventDefault();
      sendd.mid = this.placedata.mid;
      console.log(111, sendd.mid);
      deleteminiPlace(sendd.mid);
      alert('已刪除')
      setTimeout("location.href='/miniHome'", 500);
    },
  },

  setup() {
    const Route = useRoute();
    let midd = "";
    onMounted(async () => {
      const mid = Route.params.mid;
      midd = mid;
      console.log(20, midd);
      await getminiPlace(midd).then((val) => {
        console.log(22, val);
        Object.assign(placedata, val);
      });
    });
    const placedata = reactive({});
    return { placedata };
  },
};
</script>
