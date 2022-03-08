
<template>
  <div class="place register">
    附屬出入口資料

    <div v-for ="(data,index) in placeData"
      :key ="index" style="margin-bottom:5%"
      @click="goToPlacePage(data.bmid)">
      {{data.mid}}
      <!-- {{index}} -->
    </div>
    
    <!-- {{placeData}} -->
  </div>
  
</template>


<script>
// @ is an alias to /src
// import{ useRouter }from "vue-router"
import{
    getbPlaceList
    // getPlace
  }from"../model/brminiplace.js";
import {onMounted,ref } from "vue";

export default {
  name: "place register",
  // components: {
  //   HelloWorld,
  // },  
  setup() {
    onMounted(async()=>{
      await getbPlaceList().then((res) => {
        console.log(32,res);//32代表第幾行
        Object.assign(placeData.value,res);
      });
    });
    const placeData = ref([]);
    async function goToPlacePage(bmid){
      console.log(41,bmid)
      // await getPlace(id).then((res)=>{
        // console.log(44,res);
      // })
    }
    return {placeData,goToPlacePage};
  },
};
</script>
