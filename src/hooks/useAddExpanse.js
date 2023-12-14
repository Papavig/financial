import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddExpanse = () => {
    const ExpanseCollectionRef = collection(db, "Expanse");
    const { userID } = useGetUserInfo();
    
    const addExpanse = async ({
      description,
      transactionAmount,
    }) => {
      await addDoc(ExpanseCollectionRef, {
        userID,
        description,
        transactionAmount,
        createdAt: serverTimestamp(),
      });
    };
    return { addExpanse };
  };