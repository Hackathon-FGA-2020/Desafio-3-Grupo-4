const FirebaseApp = require("firebase");
require("firebase/firestore");

let FirestoreDB = null;

function checkAppInitialized() {
  if (FirebaseApp.apps.length === 0) {
    FirebaseApp.initializeApp({
      apiKey: "AIzaSyBHY1eEPAfwvmfOQfX-sqD1cZtctus-z9w",
      authDomain: "hackathon-68eff.firebaseapp.com",
      databaseURL: "https://hackathon-68eff.firebaseio.com",
      projectId: "hackathon-68eff",
      storageBucket: "hackathon-68eff.appspot.com",
      messagingSenderId: "1032224549078",
      appId: "1:1032224549078:web:193672ba82c90f4ae0c177",
      measurementId: "G-99NCSX9MVH",
    });
  }
}

function checkDBInitialized() {
  if (FirestoreDB === null) {
    FirestoreDB = FirebaseApp.firestore();
  }
}

// checa se o app ja foi inicializado, se não, o inicializa
function checkInitialized() {
  checkAppInitialized();
  checkDBInitialized();
}

// recebe o nome da colecao
// retorna uma lista de objetos com id e data
async function getCollection(collection) {
  checkInitialized();
  let list = [];
  let resp = await FirestoreDB.collection(collection).get();
  resp.forEach((doc) => list.push({ id: doc.id, data: doc.data() }));
  return list;
}

// recebe o nome da colecao e o id do documento buscado
// retorna um objeto com id e data
async function getDocument(collection, document) {
  checkInitialized();
  let doc = await FirestoreDB.collection(collection).doc(document).get();
  return { id: doc.id, data: doc.data() };
}

// recebe o nome da colecao e uma query contendo field, operator e value
// retorna uma lista de objetos com id e data
async function getCollectionWithQuery(collection, query) {
  checkInitialized();
  let list = [];
  let resp = await FirestoreDB.collection(collection)
    .where(query.field, query.operator, query.value)
    .get();
  resp.forEach((doc) => list.push({ id: doc.id, data: doc.data() }));
  return list;
}

export { getCollection, getDocument, getCollectionWithQuery };
