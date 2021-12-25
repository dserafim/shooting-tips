import { db } from '../firebase.config';
import { collection, getDocs } from "firebase/firestore";

function getPrecisionTips() {
    const tipsCollectionRef = collection(db, 'precision-ua');
    return getDocs(tipsCollectionRef).then(fetchTipsResponse);
}

function fetchTestItem(doc) {
    const document = doc.data();
    return {
        id : doc.id,
        tip : document.tip
    }
}
function fetchTipsResponse(response) {
    let tipsList = [];
    response.forEach((doc) => tipsList.push(fetchTestItem(doc)));
    return tipsList;
}
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
function getRandomTipId(tips) {
    const randomIndex = randomInteger(0,(tips.length-1));
    if(tips[randomIndex]) {
        return tips[randomIndex].id;
    } else {
        return null;
    }
}
function isTipIdInList(tips, id) {
    const tip = tips.find(obj => { return obj.id === id})
    return !!tip;
}
function getTipById(tips, id) {
    const tip = tips.find(obj => { return obj.id === id})
    if(tip) {
        return tip;
    } else {
        return null;
    }
}
function getTipFromList(list, id) {
    if(typeof id === 'undefined' || !isTipIdInList(list, id)) {
        id = getRandomTipId(list);
    }
    return getTipById(list, id);
    
}
export {
    fetchTestItem,
    fetchTipsResponse,
    getPrecisionTips,
    getTipById,
    isTipIdInList,
    getTipFromList
}