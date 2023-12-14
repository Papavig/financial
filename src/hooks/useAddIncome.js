import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddIncome = () => {
    const IncomeCollectionRef = collection(db, "Income");
    const { userID } = useGetUserInfo();
    
    const addIncome = async ({
      description,
      transactionAmount,
    }) => {
      await addDoc(IncomeCollectionRef, {
        userID,
        description,
        transactionAmount,
        createdAt: serverTimestamp(),
      });
    };
    return { addIncome };
  };