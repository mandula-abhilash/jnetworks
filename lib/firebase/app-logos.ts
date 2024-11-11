import { db } from '@/lib/firebase/config';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from 'firebase/firestore';
import { AppLogo } from '../models/app-logo';

const COLLECTION_NAME = 'appLogos';

export async function getAppLogos() {
  const q = query(collection(db, COLLECTION_NAME), orderBy('name', 'asc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as AppLogo[];
}

export async function addAppLogo(logo: Omit<AppLogo, 'id'>) {
  return await addDoc(collection(db, COLLECTION_NAME), logo);
}

export async function updateAppLogo(id: string, logo: Partial<AppLogo>) {
  const docRef = doc(db, COLLECTION_NAME, id);
  await updateDoc(docRef, logo);
}

export async function deleteAppLogo(id: string) {
  const docRef = doc(db, COLLECTION_NAME, id);
  await deleteDoc(docRef);
}