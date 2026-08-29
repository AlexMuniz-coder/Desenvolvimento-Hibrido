// ============================================================
// MODELO de configuração do Firebase (valores fictícios)
// ============================================================
// Este é o arquivo que DEVE ser versionado no Git/GitHub.
// Copie-o para "firebase-config.js" e preencha com os dados reais
// do seu projeto, e então ignore o firebase-config.js real,
// como ensinado na Seção 2 da apresentação e no Exercício 7.
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDLpFXFhxKY9mTytE7lzCk94kxNFKGEzok",
  authDomain: "desenvolvimento-hibrido-uva.firebaseapp.com",
  projectId: "desenvolvimento-hibrido-uva",
  storageBucket: "desenvolvimento-hibrido-uva.firebasestorage.app",
  messagingSenderId: "975475039215",
  appId: "1:975475039215:web:e63c6af1aa279abc44741a",
  measurementId: "G-34GQXDH5ZS"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const rtdb = getDatabase(app);
export const storage = getStorage(app);
