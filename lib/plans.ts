import { db } from '@/lib/firebase';
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

export interface BroadbandPlan {
  id?: string;
  description: string;
  name: string;
  speed: number;
  monthly: number;
  halfYearly: number;
  yearly: number;
}

export interface OTTPlan {
  id?: string;
  description: string;
  name: string;
  apps: string[];
  features: string[];
}

// Broadband Plans
export async function getBroadbandPlans() {
  const q = query(collection(db, 'broadbandPlans'), orderBy('speed', 'asc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as BroadbandPlan[];
}

export async function addBroadbandPlan(plan: Omit<BroadbandPlan, 'id'>) {
  return await addDoc(collection(db, 'broadbandPlans'), plan);
}

export async function updateBroadbandPlan(id: string, plan: Partial<BroadbandPlan>) {
  const docRef = doc(db, 'broadbandPlans', id);
  await updateDoc(docRef, plan);
}

export async function deleteBroadbandPlan(id: string) {
  const docRef = doc(db, 'broadbandPlans', id);
  await deleteDoc(docRef);
}

// OTT Plans
export async function getOTTPlans() {
  const querySnapshot = await getDocs(collection(db, 'ottPlans'));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as OTTPlan[];
}

export async function addOTTPlan(plan: Omit<OTTPlan, 'id'>) {
  return await addDoc(collection(db, 'ottPlans'), plan);
}

export async function updateOTTPlan(id: string, plan: Partial<OTTPlan>) {
  const docRef = doc(db, 'ottPlans', id);
  await updateDoc(docRef, plan);
}

export async function deleteOTTPlan(id: string) {
  const docRef = doc(db, 'ottPlans', id);
  await deleteDoc(docRef);
}