
<template>
  <div class="place register">
    場所出入口資料

    <div
      v-for="(data, index) in placeData"
      :key="index"
      style="margin-bottom: 5%"
      @click="goToPlacePage(data.id)"
    >
      {{ data.id }}<br>
      {{ data.bid }}
    </div>

    <!-- {{ placeData }} -->
  </div>
</template>

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
