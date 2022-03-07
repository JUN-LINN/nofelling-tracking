<template>
  <div class="choice">
    <h1 class="text2-place">識別場所類別</h1>
    <router-link to="/fixedplace"
      ><input
        type="button"
        value="固定場所"
        v-on:click="placeClick"
        class="choice-button"
        id="p1" /></router-link
    ><br /><br />
    <router-link to="/mobileplace"
      ><input
        type="button"
        value="流動場所"
        v-on:click="placeClick2"
        class="choice-button"
        id="p2" /></router-link
    ><br /><br />
    <router-link to="/transportation"
      ><input
        type="button"
        value="交通工具"
        v-on:click="placeClick3"
        class="choice-button"
        id="p3" /></router-link
    ><br /><br />
    <router-link to="/place"
      ><input
        type="button"
        value="具附屬場所之地"
        v-on:click="placeClick4"
        class="choice-button"
        id="p4"
    /></router-link>
  </div>
  <a
    href="javascript:void(0)"
    onclick="document.getElementById('light2').style.display='block';document.getElementById('fade2').style.display='block'"
    ><button class="comment-1">i</button></a
  >
  <div id="light2" class="explanation1">
    <pre>
  場所類別說明:

  1.固定場所:擁有固定地址者屬固定場所

  註:若有多處固定擺攤地址務必各地址皆申請一次

  ！*:火車站、高鐵站等有固定位置屬固定場所，

      需在固定場所註冊

  </pre
    >
    <a
      href="javascript:void(0)"
      onclick="document.getElementById('light2').style.display='none';document.getElementById('fade2').style.display='none'"
      class="x2"
      >X</a
    >
  </div>
  <div id="fade2" class="black_overlay"></div>

  <a
    href="javascript:void(0)"
    onclick="document.getElementById('light3').style.display='block';document.getElementById('fade3').style.display='block'"
    ><button class="comment-2">i</button></a
  >
  <div id="light3" class="explanation2">
    <pre>
 
  場所類別說明:

  2.流動場所:擺攤位置為不固定者屬流動場所
  </pre
    >
    <a
      href="javascript:void(0)"
      onclick="document.getElementById('light3').style.display='none';document.getElementById('fade3').style.display='none'"
      class="x3"
      >X</a
    >
  </div>
  <div id="fade3" class="black_overlay"></div>

  <a
    href="javascript:void(0)"
    onclick="document.getElementById('light4').style.display='block';document.getElementById('fade4').style.display='block'"
    ><button class="comment-3">i</button></a
  >
  <div id="light4" class="explanation3">
    <pre>
 
  場所類別說明:

  3.交通工具:營業用車、大眾運輸車輛為交通工具

    註:一台計程車、客運屬一個交通工具

       一台捷運、火車屬一個交通工具
  </pre
    >
    <a
      href="javascript:void(0)"
      onclick="document.getElementById('light4').style.display='none';document.getElementById('fade4').style.display='none'"
      class="x4"
      >X</a
    >
  </div>
  <div id="fade4" class="black_overlay"></div>

  <a
    href="javascript:void(0)"
    onclick="document.getElementById('light5').style.display='block';document.getElementById('fade5').style.display='block'"
    ><button class="comment-4">i</button></a
  >
  <div id="light5" class="explanation4">
    <pre>
 
  場所類別說明:

  4.具附屬場所之地:此場所為特殊情況，
       
    包含:
    (1)百貨公司、大型商場(百貨公司、商場為場所，
       
    櫃位及進駐攤販為附屬場所，統一由百貨公司、商場進行註冊)

    (2)大學(大學為場所，大學各系館為附屬場所，
           
        統一由大學進行註冊)

    (3)機場(機場為場所，進駐免稅店為附屬場所)

    ！*:需先註冊完場所才可註冊附屬場所
  </pre
    >
    <a
      href="javascript:void(0)"
      onclick="document.getElementById('light5').style.display='none';document.getElementById('fade5').style.display='none'"
      class="x5"
      >X</a
    >
  </div>
  <div id="fade5" class="black_overlay"></div>
</template>
<style>
.text2-place {
  position: absolute;
  top: 12%;
  left: 8%;
  font-size: 25px;
}
.black_overlay {
  display: none;
  z-index: 1001;
  -moz-opacity: 0;
  opacity: 0;
  filter: alpha(opacity=0);
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

#p1 {
  position: absolute;
  top: 20%;
  left: 25%;
}
#p2 {
  position: absolute;
  top: 32%;
  left: 25%;
}
#p3 {
  position: absolute;
  top: 44%;
  left: 25%;
}
#p4 {
  position: absolute;
  top: 56%;
  left: 25%;
}

.comment-1 {
  border: radius 50%;
  font-size: 20px;
  position: absolute;
  top: 23%;
  left: 12%;
  border-radius: 50%;
  width: 25px;
  height: 25px;
}

.comment-2 {
  border: radius 50%;
  font-size: 20px;
  position: absolute;
  top: 35%;
  left: 12%;
  border-radius: 50%;
  width: 25px;
  height: 25px;
}
.comment-3 {
  border: radius 50%;
  font-size: 20px;
  position: absolute;
  top: 47%;
  left: 12%;
  border-radius: 50%;
  width: 25px;
  height: 25px;
}
.comment-4 {
  border: radius 50%;
  font-size: 20px;
  position: absolute;
  top: 59%;
  left: 12%;
  border-radius: 50%;
  width: 25px;
  height: 25px;
}
.write-text {
  display: none;
  position: absolute;
  top: 20%;
  left: 22%;
  padding: 3%;
  padding-top: 10%;
  border: 1px solid rgba(172, 184, 218, 0.548);
  border-radius: 10px;
  background-color: white;
  z-index: 1002;
  overflow: auto;
  text-align: center;
  width: 300px;
  height: 150px;
}

.explanation1,
.explanation2,
.explanation3,
.explanation4 {
  display: none;
  position: absolute;
  top: 40%;
  left: 10%;
  padding: 3%;
  border: 1px solid rgba(172, 184, 218, 0.548);
  border-radius: 10px;
  background-color: white;
  z-index: 1002;
  overflow: auto;
  text-align: left;
}

.text-submit {
  position: absolute;
  top: 60%;
  right: 8%;
  font-size: 18px;
  color: rgb(0, 0, 0);
  border-radius: 10%;
  background-color: rgba(169, 219, 241, 0.774);
}
.x1,
.x2,
.x3,
.x4,
.x5 {
  position: absolute;
  top: 5%;
  right: 5%;
  text-decoration: none;
  color: black;
}
</style>