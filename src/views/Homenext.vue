
<template>
  <div class="homenext">
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
      @click="goToPlacePage(data.id, data.leaderid)"
    >
      <p>
        場所id:{{ data.id }} <br />
        場所名稱:{{ data.name }}
      </p>
      <hr color="white" size="1" />
      <!-- {{ index }} -->
    </div>
  </div>
</template>

<style>
hr {
  width: 65%;
  color: white;
}
.homenext {
  background-color: rgb(195, 210, 236);
  padding: 2%;
  border-radius: 5%;
  padding-top: 0.5cm;
}
</style>


<script>
// @ is an alias to /src
import { useRouter } from "vue-router";
import { getPlaceList, getPlace } from "../model/place.js";
import { onMounted, ref } from "vue";

export default {
  name: "place register",
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
        let searchplace = getPlace(this.aaaa);
        console.log(
          50,
          getPlace(this.aaaa).then((res) => {
            // console.log(48,res)
            if (searchplace != null) {
              this.goToPlacePage(this.aaaa, res.leaderid);
            }
          })
        );
      }
    },
  },
  setup() {
    onMounted(async () => {
      await getPlaceList().then((res) => {
        console.log(31, res);
        Object.assign(placeData.value, res);
      });
      console.log(29, placeData.value);
    });
    const placeData = ref([]);
    const Router = useRouter();
    async function goToPlacePage(id, leaderid) {
      let password = prompt("Please enter your leaderid");
      // console.log(44,placeData.value.leaderid)
      console.log(46, password.toString() + "    " + leaderid);
      if (password.toString() == leaderid.toString()) {
        Router.push({ path: `/useplace/${id}` });
      } else {
        alert("leaderid Error");
      }
    }

    return { placeData, goToPlacePage };
  },
};
</script>
