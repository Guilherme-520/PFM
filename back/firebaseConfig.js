// Importações específicas do Firebase Modular SDK
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBeo7IrZt5QNF4iydR4iIefIbE4Q5Z5_2o",
  authDomain: "projectiot-40548.firebaseapp.com",
  projectId: "projectiot-40548",
  storageBucket: "projectiot-40548.appspot.com",
  messagingSenderId: "773740698896",
  appId: "1:773740698896:web:7df0d3451fd1225a69d995"
};

// Inicializa o app Firebase e o Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;
