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

export async function addbplace(data) {
  var addbStatus = false;
  // var createTime= new Date();
  try {
    setDoc(doc(dbFirestore, "bplace", data.bid.toString()), {
      id: data.id, //id為資料表欄位名稱
      bid:data.bid,
      bname:data.bname
      // createTime:createTime.toISOString()
    });
    addbStatus = true;
  } catch {
    addbStatus = false;
  }
  return addbStatus
}


export async function getbPlaceList() {
  var bplacelist = []
  const bq = collection(dbFirestore, "bplace"); //資料庫名稱
  const bquerySnapshot = await getDocs(bq);
  bquerySnapshot.forEach((doc) => {
    bplacelist.push(doc.data());
  })
  return bplacelist;
}

export async function getbPlace(bid) { //id為資料表，第一個場所資料
  var bplace = ""
  const bdocRef = doc(dbFirestore, "bplace", bid.toString());
  const bdocSnap = await getDoc(bdocRef);
  if (bdocSnap.exists()) {
    bplace = bdocSnap.data();
  } else {
    console.log("No such document!");
  }
  return bplace;
}

export async function deletebPlace(bid) { //刪除資料表名稱
  var bstatus = false
  const bplace = await getbPlace(bid)
  if (bplace != "") {
    deleteDoc(doc(dbFirestore, "bplace", bid.toString()))
    bstatus = true
  }
  return bstatus
}

export async function updatebPlace(data) {
  var bstatus = false;
  const bplace = await getbPlace(data.bid);
  // var updateTime=new Date();
  if (bplace != "") {
    await updateDoc(doc(dbFirestore, "bplace", data.bid.toString()), {
      bid: data.bid,
      hwid: data.hwid,
      about: data.about
    })
    bstatus = true
  }
  return bstatus
}
