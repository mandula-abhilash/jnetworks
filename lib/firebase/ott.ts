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
import { OTTPlan } from '../models/ott';

const COLLECTION_NAME = 'ottPlans';

export async function getOTTPlans() {
  const q = query(collection(db, COLLECTION_NAME), orderBy('name', 'asc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as OTTPlan[];
}

export async function addOTTPlan(plan: Omit<OTTPlan, 'id'>) {
  return await addDoc(collection(db, COLLECTION_NAME), plan);
}

export async function updateOTTPlan(id: string, plan: Partial<OTTPlan>) {
  const docRef = doc(db, COLLECTION_NAME, id);
  await updateDoc(docRef, plan);
}

export async function deleteOTTPlan(id: string) {
  const docRef = doc(db, COLLECTION_NAME, id);
  await deleteDoc(docRef);
}