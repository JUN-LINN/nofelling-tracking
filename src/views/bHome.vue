
<template>
 
    <h2 style="color">場所出入口資料</h2>
 <div class="place-register">
    <div
      v-for="(data, index) in placeData"
      :key="index"
      style="margin-bottom: 5%"
      @click="goToPlacePage(data.id)"
    >
      <p>id:{{ data.id }}<br></p>
      <p>bmid:{{ data.bid }}<br></p>
      <hr color="white" size="1">
    </div>

    <!-- {{ placeData }} -->
  </div>
</template>

<style>
hr {
  width: 65%;
  color: white;
}
.place-register {
  background-color: rgb(195, 210, 236);
  padding: 2%;
  border-radius: 5%;
  padding-top: 0.5cm;
}
</style>

<script>
// @ is an alias to /src
// import{ useRouter }from "vue-router"
import {
  getbrPlaceList,
  // getPlace
} from "../model/brplace.js";
import { onMounted, ref } from "vue";

export default {
  name: "place register",
  // components: {
  //   HelloWorld,
  // },
  setup() {
    onMounted(async () => {
      await getbrPlaceList().then((res) => {
        console.log(32, res); //32代表第幾行
        Object.assign(placeData.value, res);
      });
    });
    const placeData = ref([]);
    async function goToPlacePage(pId) {
      console.log(41, pId);
      // await getPlace(id).then((res)=>{
      // console.log(44,res);
      // })
    }
    return { placeData, goToPlacePage };
  },
};
</script>
