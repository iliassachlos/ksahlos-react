'use server'
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "./firebase";

export async function getPhotos(category) {
    const querySnapshot = await getDocs(query(collection(db, "photos", "gallery", category), orderBy("number", "asc")));
    return querySnapshot.docs.map((doc) => doc.data())
}