<template>
  <div class="place">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <p>id:{{ placedata.id }}</p>
    <p>name:{{ placedata.name }}</p>
    <p>cellphone:{{ placedata.cellphone }}</p>
    {{ placedata }} -->
    <form action="" class="name3">
      場所ID：
      <input
        type="text"
        name="id"
        autocomplete="off"
        v-bind:value="placedata.id"
        readonly
        @input="placedata.id = $event.target.value"
      /><br />
      
      場所名稱：
      <input
        type="text"
        name="name"
        autocomplete="off"
        v-bind:value="placedata.name"
        @input="placedata.name = $event.target.value"
      /><br />
      場所地址：
      <input
        type="text"
        name="address"
        autocomplete="off"
        v-bind:value="placedata.address"
        @input="placedata.address = $event.target.value"
      /><br />
      場所類型：
      <input
        type="text"
        name="type"
        autocomplete="off"
        v-bind:value="placedata.type"
        @input="placedata.type = $event.target.value"
      /><br />
      場所負責人身分證：
      <input
        type="text"
        name="leaderid"
        autocomplete="off"
        v-bind:value="placedata.leaderid"
        @input="placedata.leaderid = $event.target.value"
      /><br />
      場所負責人手機：
      <input
        type="text"
        name="cellphone"
        autocomplete="off"
        v-bind:value="placedata.cellphone"
        @input="placedata.cellphone = $event.target.value"
      /><br />
      統一編號：
      <input
        type="text"
        name="tax"
        autocomplete="off"
        v-bind:value="placedata.tax"
        @input="placedata.tax = $event.target.value"
      /><br />
      聯絡地址：
      <input
        type="text"
        name="con_address"
        autocomplete="off"
        v-bind:value="placedata.con_address"
        @input="placedata.con_address = $event.target.value"
      /><br />
      場所電話：
      <input
        type="text"
        name="telephone"
        autocomplete="off"
        v-bind:value="placedata.telephone"
        @input="placedata.telephone = $event.target.value"
      /><br />
      車牌/編號：
      <input
        type="text"
        name="carnumber"
        autocomplete="off"
        v-bind:value="placedata.carnumber"
        @input="placedata.carnumber = $event.target.value"
      /><br />
      <button type="submit" @click="onUpdate($event)" class="sendup">
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

button {
  margin-top: 0.8cm;
}

.title3 {
  position: absolute;
  top: 65px;
  left: 100px;
}
.name3 {
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
.sendup {
  /* padding-top: 20px; */
  position: absolute;
  left: 200px;
  width: 50px;
  height: 30px;
  font-size: 15px;
}
.senddelete {
  position: absolute;
  left: 250px;
  width: 50px;
  height: 30px;
  font-size: 15px;
  margin-left: 0.5cm;
}
.taxadd {
  position: absolute;
  top: 380px;
  left: 60px;
}
.taxwidth {
  width: 250px;
}

.comment-f {
  border: radius 50%;
  font-size: 20px;
  position: absolute;
  top: 11%;
  right: 10%;
  border-radius: 50%;
  width: 25px;
  height: 25px;
}

.xf {
  position: absolute;
  top: 5%;
  right: 5%;
  text-decoration: none;
  color: black;
}
</style>


<script>
import { onMounted, reactive } from "vue";
import { getPlace, deletePlace, updatePlace } from "../model/place.js";
import { useRoute } from "vue-router";
var sendd = {
  id: "",
  name: "",
  Status: "",
  address: "",
  type: "",
  leaderid: "",
  cellphone: "",
  tax: "",
  con_address: "",
  telephone: "",
  carnumber: "",
};
export default {
  name: "place",

  methods: {
    onUpdate(event) {
      event.preventDefault();
      // event.once();
      let formData = JSON.stringify(this.placedata);
      console.log(74, formData);
      sendd.id = this.placedata.id;      
      sendd.name = this.placedata.name;
      // console.log(109,event.currentTarget.value)
      sendd.Status = this.placedata.Status;
      sendd.address = this.placedata.address;
      sendd.type = this.placedata.type;
      sendd.leaderid = this.placedata.leaderid;
      sendd.cellphone = this.placedata.cellphone;
      sendd.tax = this.placedata.tax;
      sendd.con_address = this.placedata.con_address;
      sendd.telephone = this.placedata.telephone;
      sendd.carnumber = this.placedata.carnumber;
      // console.log(69,this.placedata.id);
      console.log(70, sendd);
      // addplace(sendd)
      updatePlace(sendd);
      alert('修改成功')
    },
    onDelete(event) {
      event.preventDefault();

      sendd.id = this.placedata.id;
      console.log(111, sendd.id);
      deletePlace(sendd.id);
      alert('已刪除')
      setTimeout("location.href='/Homenext'", 500);
    },
  },
  setup() {
    const Route = useRoute();
    let idd = "";
    onMounted(async () => {
      const id = Route.params.id;
      idd = id;
      console.log(20, id);
      await getPlace(idd).then((val) => {
        console.log(22, val);
        Object.assign(placedata, val);
      });
    });
    const placedata = reactive({});
    return { placedata };
  },
};
</script>
