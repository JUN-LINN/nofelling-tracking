<template>
<h2 class="title66">含有附屬場所之地-場所資料</h2> 
<form class="name66">
    <label for="new-todo-input">
    場所名稱:
    </label>
     <input 
      type="text"/>
</form> 
<form class="leaderid66">
    <label for="new-todo-input">
    場所負責人身分證:
    </label>
     <input 
      type="text"/>
</form>
<form class="cellphone66">
    <label for="new-todo-input">
    場所負責人手機:
    </label>
     <input 
      type="text"/>
</form>
<form class="telephone66">
    <label for="new-todo-input">
    場所電話:
    </label>
     <input 
      type="text"/>
</form>
<form class="address66">
    <label for="new-todo-input">
    場所地址:
    </label>
     <input 
      type="text"/>
</form>
<form class="con_address66">
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
  <button class="send66" v-on:click="sendit">更新</button>
</div>
</template>
<style>
.title66{
  position: absolute;
  top: 60px;
  left: 60px;
}
.name66{
  position: absolute;
  top:140px;
  left: 60px;
}
.leaderid66{
  position: absolute;
  top:180px;
  left: 60px;
}
.cellphone66{
  position: absolute;
  top:220px;
  left: 60px; 
}
.telephone66{
  position: absolute;
  top:260px;
  left: 60px; 
}
.address66{
  position: absolute;
  top:300px;
  left: 60px; 
}
.con_address66{
  position: absolute;
  top:340px;
  left: 60px; 
}
.send66{
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