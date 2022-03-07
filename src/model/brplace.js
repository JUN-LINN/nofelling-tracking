import {
  firebaseConfig
} from "../util/dbConfig.js"
import {
  initializeApp
} from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
  updateDoc
} from "firebase/firestore"; //, collection,getDocs
// import { set } from "core-js/core/dict";
// import { effectScope } from "vue";
// import { async } from "@firebase/util";
const firebaseApp = initializeApp(firebaseConfig)
const dbFirestore = getFirestore(firebaseApp)

export async function addbrplace(data) {
  var addbrStatus = false;
  // var createTime= new Date();
  try {
    setDoc(doc(dbFirestore, "brplace", Math.random().toString(36).slice(-8)), {
      id: data.id, //id為資料表欄位名稱
      num:data.num,
      bid: Math.random().toString(36).slice(-8),
      con_address: data.con_address,
      //about:data.about
      // createTime:createTime.toISOString()
    });
    addbrStatus = true;
  } catch {
    addbrStatus = false;
  }
  return addbrStatus
}


export async function getbrPlaceList() {
  var bplacelist = []
  const bq = collection(dbFirestore, "brplace"); //資料庫名稱
  const bquerySnapshot = await getDocs(bq);
  bquerySnapshot.forEach((doc) => {
    bplacelist.push(doc.data());
  })
  return bplacelist;
}

export async function getbrPlace(bid) { //id為資料表，第一個場所資料
  var bplace = ""
  const bdocRef = doc(dbFirestore, "brplace", bid.toString());
  const bdocSnap = await getDoc(bdocRef);
  if (bdocSnap.exists()) {
    bplace = bdocSnap.data();
  } else {
    console.log("No such document!");
  }
  return bplace;
}

export async function deletebrPlace(bid) { //刪除資料表名稱
  var bstatus = false
  const bplace = await getbrPlace(bid)
  if (bplace != "") {
    deleteDoc(doc(dbFirestore, "brplace", bid.toString()))
    bstatus = true
  }
  return bstatus
}

export async function updatebrPlace(data) {
  var bstatus = false;
  const bplace = await getbrPlace(data.bid);
  // var updateTime=new Date();
  if (bplace != "") {
    await updateDoc(doc(dbFirestore, "brplace", data.bid.toString()), {
      bid: data.bid,
      hwid: data.hwid,
      about: data.about
    })
    bstatus = true
  }
  return bstatus
}
