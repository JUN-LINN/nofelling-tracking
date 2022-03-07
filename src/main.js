import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import liff from '@line/liff'
// import { firebaseConfig } from "./util/dbConfig";
// import { initializeApp } from "firebase/app";
// import { getFirestore, doc, getDoc , } from "firebase/firestore";
import {
    getPlaceList,
    getPlace,
    addplace,
    deletePlace,
    updatePlace
} from "./model/place.js"
// import { deleteDoc } from 'firebase/firestore'

// const firebaseApp = initializeApp(firebaseConfig);
// const dbFirestore = getFirestore(firebaseApp);

// async function getDocument() {
//     const docRef = doc(dbFirestore, "testjia", "1")
//     const docSnap = await getDoc(docRef);
//     console.log(docSnap.data())
// }

// getDocument()


getPlaceList().then((res) => { //印出所有place
    console.log(2, res);
});

getPlace(10).then((res) => { //印出id為10的place
    console.log(28, res);
});
var sendd = {
    id: "",
    name: "",
    Status: "",
    address: "",
    type: "",
    leaderid: "",
    cellphone: "",
    tax: "",
    con_address: "",
    telephone: "",
    carnumber: ""
}

addplace(sendd).then((res) => { //新增place
    // console.log(35,sendd)
    console.log(32, res);
});
var test = false
if (test) {
    deletePlace(4).then((res) => {
        console.log(42, res);
    });
}











var neww1 = {
    id: "",
    newid: "",
    name: "",
    Status: "",
    address: "",
    type: "",
    leaderid: "",
    cellphone: "",
    tax: "",
    con_address: "",
    telephone: "",
    carnumber: ""
}

updatePlace(neww1).then((res) => {
    console.log(55, res);
});

liff
    .init({
        //use own liffid
        liffId: "1656791281-3LekBYXZ",
    })
    .then(async () => {
        //start to use liff's api
        console.log(51, "liff init susscess");
    });

createApp(App).use(store).use(router).mount('#app')