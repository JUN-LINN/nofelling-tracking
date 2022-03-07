
<template>
  <div class="miniplace_register">
    <form>
      <input
        type="text"
        name="search"
        @input="aaaa = $event.target.value"
        placeholder="搜尋場所ID"
      />
      <button type="submit" @click="search($event)">submit</button>
    </form>
    <div
      v-for="(data, index) in placeData"
      :key="index"
      style="margin-bottom: 5%"
      @click="goToPlacePage(data.mid, data.mleaderid)"
    >
      <p>
        附屬場所id:{{ data.mid }}<br />
        場所名稱:{{ data.mname }}
      </p>
      <hr color="white" size="1" />
      <!-- {{ index }} -->
    </div>
  </div>
</template>

<style>
.miniplace_register {
  background-color: rgb(195, 210, 236);
  padding: 2%;
  border-radius: 5%;
  padding-top: 0.5cm;
}

hr {
  width: 65%;
  color: white;
}
</style>

<script>
// @ is an alias to /src
import { useRouter } from "vue-router";
import {
  getminiPlaceList,
  getminiPlace /*, getminiPlace8*/,
} from "../model/miniplace.js";
import { onMounted, ref } from "vue";

export default {
  name: "miniplace register",
  // components: {
  //   HelloWorld,
  // },
  data() {
    return {
      aaaa: "",
    };
  },
  methods: {
    search(event) {
      event.preventDefault();
      if (this.aaaa != null) {
        let searchplace = getminiPlace(this.aaaa);
        console.log(
          50,
          getminiPlace(this.aaaa).then((res) => {
            console.log(48, res);
            if (searchplace != null) {
              this.goToPlacePage(this.aaaa, res.mleaderid);
            }
          })
        );
      }
    },
  },
  setup() {
    onMounted(async () => {
      await getminiPlaceList().then((res) => {
        console.log(31, res);
        Object.assign(placeData.value, res);
      });
      console.log(29, placeData.value);
    });
    const placeData = ref([]);
    const Router = useRouter();
    async function goToPlacePage(mid, leaderid) {
      let password = prompt("Please enter your leaderid");
      // console.log(44,placeData.value.leaderid)
      console.log(46, password.toString() + "    " + leaderid);
      if (password.toString() == leaderid.toString()) {
        var b = mid;
        Router.push({ name: "usemplace", params: { mid: b } });
      } else {
        alert("leaderid Error");
      }
      // console.log(38, mid);
      // var b = mid;
      // Router.push({ name: "usemplace", params: { mid: b } });
    }

    return { placeData, goToPlacePage };
  },
};
</script>
