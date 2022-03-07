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

export async function addminiplace(data) {
  var addmStatus = false;
  // var createTime= new Date();
  try {
    setDoc(doc(dbFirestore, "miniplace", data.mid), {
      id: data.id, //id為資料表欄位名稱
      // mid: Math.random().toString(36).slice(-8), //PK
      mid: data.mid,
      mname: data.mname,
      mleaderid: data.mleaderid,
      mcellphone: data.mcellphone,
      mtax: data.mtax,
      mcon_address: data.mcon_address,
      mtelephone: data.mtelephone
      // createTime:createTime.toISOString()
    });
    addmStatus = true;
  } catch {
    addmStatus = false;
  }
  return addmStatus
}


export async function getminiPlaceList() {
  var mplacelist = []
  const mq = collection(dbFirestore, "miniplace"); //資料庫名稱
  const mquerySnapshot = await getDocs(mq);
  mquerySnapshot.forEach((doc) => {
    mplacelist.push(doc.data());
  })
  return mplacelist;
}

export async function getminiPlace(mid) { //id為資料表，第一個場所資料
  var mplace = ""
  const mdocRef = doc(dbFirestore, "miniplace", mid.toString());
  const mdocSnap = await getDoc(mdocRef);
  if (mdocSnap.exists()) {
    mplace = mdocSnap.data();
  } else {
    console.log(63, "No such document!");
  }
  return mplace;
}

export async function deleteminiPlace(mname) { //刪除資料表名稱
  var mstatus = false
  const mplace = await getminiPlace(mname)
  if (mplace != "") {
    deleteDoc(doc(dbFirestore, "miniplace", mname.toString()))
    mstatus = true
  }
  return mstatus
}

export async function updateminiPlace(data) {
  var mstatus = false;
  const mplace = await getminiPlace(data.mid);
  console.log(82, data);
  // var updateTime=new Date();
  if (mplace != "") {
    await updateDoc(doc(dbFirestore, "miniplace", data.mid.toString()), {
      id: data.id,
      mid: data.mid,
      mname: data.name,
      mleaderid: data.leaderid,
      mcellphone: data.cellphone,
      mtax: data.tax,
      mcon_address: data.con_address,
      mtelephone: data.telephone,
    })
    mstatus = true
  }
  return mstatus
}