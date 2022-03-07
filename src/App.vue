<template>
  <div id="nav">
    <router-link to="/">主頁</router-link> |
    <router-link to="/choice">註冊場所</router-link><br>
    <router-link to="/testnet">註冊出入口裝置</router-link>|
    <router-link to="/testbnet">設定出入口裝置</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
