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



export async function addbrminiplace(data) {
  var addmStatus = false;
  // var createTime= new Date();
  console.log(28,data)
  try {
    setDoc(doc(dbFirestore, "brminiplace", data.bmid.toString()), {
      bmid:data.bmid,
      mid: data.mid,
      mnum: data.mnum,
      mcon_address: data.mcon_address
    });
    addmStatus = true;
  } catch {
    addmStatus = false;
  }
  return addmStatus
}


export async function getbPlaceList() {
  var bplacelist = []
  const bq = collection(dbFirestore, "brminiplace"); //資料庫名稱
  const bquerySnapshot = await getDocs(bq);
  bquerySnapshot.forEach((doc) => {
    bplacelist.push(doc.data());
  })
  return bplacelist;
}

export async function getbPlace(bmid) { //id為資料表，第一個場所資料
  var bplace = ""
  const bdocRef = doc(dbFirestore, "brminiplace", bmid.toString());
  const bdocSnap = await getDoc(bdocRef);
  if (bdocSnap.exists()) {
    bplace = bdocSnap.data();
  } else {
    console.log("No such document!");
  }
  return bplace;
}

export async function deletebPlace(bmid) { //刪除資料表名稱
  var bstatus = false
  const bplace = await getbPlace(bmid)
  if (bplace != "") {
    deleteDoc(doc(dbFirestore, "brminiplace", bmid.toString()))
    bstatus = true
  }
  return bstatus
}

export async function updatebPlace(data) {
  var bstatus = false;
  const bplace = await getbPlace(data.bid);
  // var updateTime=new Date();
  if (bplace != "") {
    await updateDoc(doc(dbFirestore, "brminiplace", data.bid.toString()), {
      bid: data.bid,
      hwid: data.hwid,
      about: data.about
    })
    bstatus = true
  }
  return bstatus
}
