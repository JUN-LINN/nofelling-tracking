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

export async function addbminiplace(data) {
  var addbmStatus = false;
  // var createTime= new Date();
  try {
    setDoc(doc(dbFirestore, "bminiplace", data.bmid.toString()), {
      mid: data.mid, //id為資料表欄位名稱
      bmid: data.bmid,
      mhwid: data.mhwid,
      mabout: data.mabout
      // createTime:createTime.toISOString()
    });
    addbmStatus = true;
  } catch {
    addbmStatus = false;
  }
  return addbmStatus
}


export async function getbminiPlaceList() {
  var bmplacelist = []
  const bmq = collection(dbFirestore, "bminiplace"); //資料庫名稱
  const bmquerySnapshot = await getDocs(bmq);
  bmquerySnapshot.forEach((doc) => {
    bmplacelist.push(doc.data());
  })
  return bmplacelist;
}

export async function getbminiPlace(bmid) { //id為資料表，第一個場所資料
  var bmplace = ""
  const bmdocRef = doc(dbFirestore, "bminiplace", bmid.toString());
  const bmdocSnap = await getDoc(bmdocRef);
  if (bmdocSnap.exists()) {
    bmplace = bmdocSnap.data();
  } else {
    console.log("No such document!");
  }
  return bmplace;
}

export async function deletebminiPlace(bmid) { //刪除資料表名稱
  var bmstatus = false
  const bmplace = await getbminiPlace(bmid)
  if (bmplace != "") {
    deleteDoc(doc(dbFirestore, "bminiplace", bmid.toString()))
    bmstatus = true
  }
  return bmstatus
}

export async function updatebminiPlace(data) {
  var bmstatus = false;
  const bmplace = await getbminiPlace(data.bmid);
  // var updateTime=new Date();
  if (bmplace != "") {
    await updateDoc(doc(dbFirestore, "bminiplace", data.bmid.toString()), {
      bmid: data.bmid,
      mhwid: data.mhwid,
      mabout: data.mabout
    })
    bmstatus = true
  }
  return bmstatus
}
