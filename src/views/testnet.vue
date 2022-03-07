

<template>
  <div class="text-choiceb">
    <h1>選擇場所</h1>
    <router-link to="/brplace"
      ><input
        type="button"
        value="場所出入口裝置註冊"
        v-on:click="textClick"
        class="choice-button"
        id="b-text" /></router-link
    ><br /><br />

    <router-link to="/brminiplace"
      ><input
        type="button"
        value="附屬場所出入口註冊"
        v-on:click="texxtClick2"
        class="choice-button"
        id="bm-text" /></router-link
    ><br /><br />
  </div>
</template>
<style>
.text-placeb {
  position: absolute;
  top: 12%;
  left: 8%;
  font-size: 25px;
}

.choice-button {
  font-size: 25px;
  padding: 10px;
  text-align: center;
  border: 0;
  color: rgb(20, 21, 95);
  background-color: rgba(231, 227, 220, 0.466);
  border-radius: 10px;
  cursor: pointer;
  width: 200px;
  height: 80px;
}
#b-text {
  position: absolute;
  top: 30%;
  left: 11%;
  width: 300px;
  height: 100px;
  text-align: center;
}
#bm-text {
  position: absolute;
  top: 58%;
  left: 11%;
  width: 300px;
  height: 100px;
  text-align: center;
}
</style>