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




export async function addplace(data) {
    var addStatus = false;
    // var createTime= new Date();
    try {
        setDoc(doc(dbFirestore, "place", data.id.toString()), {
            id: data.id, //id為資料表欄位名稱
            name: data.name,
            address: data.address,
            type: data.type,
            leaderid: data.leaderid,
            cellphone: data.cellphone,
            tax: data.tax,
            con_address: data.con_address,
            telephone: data.telephone,
            carnumber: data.carnumber
            // createTime:createTime.toISOString()
        });
        addStatus = true;
    } catch {
        addStatus = false;
    }
    return addStatus
}


export async function getPlaceList() {
    var placelist = []
    const q = collection(dbFirestore, "place"); //資料庫名稱
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        placelist.push(doc.data());
    })
    return placelist;
}

export async function getPlace(id) { //id為資料表，第一個場所資料
    var place = ""
    const docRef = doc(dbFirestore, "place", id.toString());
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        place = docSnap.data();
    } else {
        console.log("No such document!");
    }
    return place;
}


export async function deletePlace(id) { //刪除資料表名稱
    var status = false
    console.log(77, id)
    const place = await getPlace(id)
    // console.log(78,place)
    
    if (place != "") {
        deleteDoc(doc(dbFirestore, "place", id.toString()))
        status = true
    }
    return status
}

export async function updatePlace(data) {
    var status = false;
    const place = await getPlace(data.id);
    // var updateTime=new Date();
    if (place != "") {
        await updateDoc(doc(dbFirestore, "place", data.id.toString()), {
            // id: data.id,
            name: data.name,
            address: data.address,
            // type: data.type,
            leaderid: data.leaderid,
            cellphone: data.cellphone,
            tax: data.tax,
            con_address: data.con_address,
            telephone: data.telephone,
            // carnumber: data.carnumber
        })
        status = true
    }
    return status
}