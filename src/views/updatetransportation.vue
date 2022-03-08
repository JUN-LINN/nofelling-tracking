<template>
<h2 class="title55">交通工具-場所資料</h2> 
<form class="pid55">
    <label for="new-todo-input">
    場所名稱:
    </label>
     <input 
      type="text"/>
</form> 
<form class="leaderid55">
    <label for="new-todo-input">
    場所負責人身分證:
    </label>
     <input 
      type="text"/>
</form>
<form class="cellphone55">
    <label for="new-todo-input">
    場所負責人手機:
    </label>
     <input 
      type="text"/>
</form>
<form class="telephone55">
    <label for="new-todo-input">
    場所電話:
    </label>
     <input 
      type="text"/>
</form>
<form class="carnumber55">
    <label for="new-todo-input">
    車牌/編號:
    </label>
     <input 
      type="text"/>
</form>
<form class="con_address55">
    <label for="new-todo-input">
    聯絡地址:
    </label>
     <input 
      type="text"/>
</form>
<form class="taxadd">
  <label for="new-todo-input">
    統一編號:
    </label>
     <input 
      type="text" class="taxwidth" placeholder="法人請輸入統編，非法人請填null" />
</form>
<div>
  <button class="send55" v-on:click="sendit">更新</button>
</div>
</template>
<style>
.title55{
  position: absolute;
  top: 60px;
  left: 100px;
}
.pid55{
  position: absolute;
  top:140px;
  left: 60px;
}
.leaderid55{
  position: absolute;
  top:180px;
  left: 60px;
}
.cellphone55{
  position: absolute;
  top:220px;
  left: 60px; 
}
.telephone55{
  position: absolute;
  top:260px;
  left: 60px; 
}
.carnumber55{
  position: absolute;
  top:300px;
  left: 60px; 
}
.con_address55{
  position: absolute;
  top:340px;
  left: 60px; 
}
.send55{
  position: absolute;
  top: 390px;
  right:100px;
  width:50px ;
  height:20px;
  font-size: 10px;
}
</style>

// <script>

// import{
//     updatePlace
//     // getPlace
//   }from"../model/place.js";
// import {onMounted,ref } from "vue";


// export default {


//   data() {
//     return {
//       msg: "",
//     };
//   },
//    setup() {
//     onMounted(async()=>{
//       await data().then((res) => {
//         console.log(32,res);//32代表第幾行
//         Object.assign(placeData.value,res);
//       });
//     });
//     const placeData = ref([]);
//     // async function goToPlacePage(pId){
//     //   console.log(41,pId)
//     //   // await getPlace(id).then((res)=>{
//     //     // console.log(44,res);
//     //   // })
//     // }
//     // return {placeData,goToPlacePage};
//   },
  
// };
</script>