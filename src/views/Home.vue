
<template>
  <div class="test">
    <router-link to="/choice">
      <input
        type="button"
        value="場所資料註冊"
        v-on:click="placeClick"
        class="choice-button"
        id="aa" /></router-link
    ><br /><br />
    <router-link to="/Homenext">
      <input
        type="button"
        value="場所資料修改"
        v-on:click="placeClick"
        class="choice-button"
        id="bb" /></router-link
    ><br /><br />
    <router-link to="/miniplace">
      <input
        type="button"
        value="附屬場所註冊"
        v-on:click="placeClick"
        class="choice-button"
        id="cc" /></router-link
    ><br /><br />
    <router-link to="/miniHome">
      <input
        type="button"
        value="附屬場所修改"
        v-on:click="placeClick"
        class="choice-button"
        id="dd" /></router-link
    ><br /><br />
    <router-link to="/brplace">
      <input
        type="button"
        value="場所出入口註冊"
        v-on:click="placeClick"
        class="choice-button"
        id="ee" /></router-link
    ><br /><br />
    <router-link to="/bsplace">
      <input
        type="button"
        value="場所出入口設定"
        v-on:click="placeClick"
        class="choice-button"
        id="ff" /></router-link
    ><br /><br />
    <router-link to="/brminiplace">
      <input
        type="button"
        value="附屬出入口註冊"
        v-on:click="placeClick"
        class="choice-button"
        id="gg" /></router-link
    ><br /><br />
    <router-link to="/bsminiplace">
      <input
        type="button"
        value="附屬出入口設定"
        v-on:click="placeClick"
        class="choice-button"
        id="hh" /></router-link
    ><br /><br />
    <router-link to="/bHome">
      <input
        type="button"
        value="場所出入口資料"
        v-on:click="placeClick"
        class="choice-button"
        id="ii" /></router-link
    ><br /><br />
    <router-link to="/bmHome">
      <input
        type="button"
        value="附屬出入口資料"
        v-on:click="placeClick"
        class="choice-button"
        id="jj" /></router-link
    ><br /><br />
  </div>
</template>




 
 <style>
.choice-button {
  font-size: 15px;
  text-align: center;
  border: 0;
  color: rgb(20, 21, 95);
  background-color: rgba(231, 227, 220, 0.466);
  border-radius: 10px;
  cursor: pointer;
  width: 200px;
  height: 50px;
}

#aa {
  position: absolute;
  top: 15%;
  left: 25%;
}
#bb {
  position: absolute;
  top: 25%;
  left: 25%;
}
#cc {
  position: absolute;
  top: 35%;
  left: 25%;
}
#dd {
  position: absolute;
  top: 45%;
  left: 25%;
}
#ee {
  position: absolute;
  top: 55%;
  left: 25%;
}
#ff {
  position: absolute;
  top: 65%;
  left: 25%;
}
#gg {
  position: absolute;
  top: 75%;
  left: 25%;
}
#hh {
  position: absolute;
  top: 85%;
  left: 25%;
}
#ii {
  position: absolute;
  top: 95%;
  left: 25%;
}
#jj {
  position: absolute;
  top: 105%;
  left: 25%;
}
</style>