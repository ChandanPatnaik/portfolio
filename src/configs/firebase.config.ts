import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import {
  Database,
  ref as dbRef,
  get,
  getDatabase,
  push,
  remove,
  set,
  update,
} from "firebase/database";
import { FirebaseStorage, getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_API_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let analytics, db: Database, storage: FirebaseStorage, auth: Auth;

if (firebaseConfig?.projectId) {
  const app = initializeApp(firebaseConfig);
  if (app.name && typeof window !== "undefined") analytics = getAnalytics(app);
  db = getDatabase();
  storage = getStorage();
  auth = getAuth(app);
}

const database = {
  push: async (path: string, value: object) => {
    await push(dbRef(db, path), {
      ...value,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userAgent: navigator?.userAgent,
    });
  },
  set: async (path: string, value: object) => {
    await set(dbRef(db, path), {
      ...value,
    });
  },
  update: async (path: string, value: object) => {
    try {
      await update(dbRef(db, path), {
        ...value,
      });
    } catch (error) {
      console.log(error);
    }
  },
  get: async (path: string) => {
    try {
      const snap = await get(dbRef(db, path));
      return snap.exists() ? snap.val() : {};
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (path: string) => {
    try {
      await remove(dbRef(db, path));
    } catch (error) {}
  },
};

export { analytics, auth, database, db };
