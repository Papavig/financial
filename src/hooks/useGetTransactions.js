import { useEffect, useState } from "react";
import {
  query,
  collection,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

import {useGetUserInfo} from "./useGetUserInfo"
import { db } from "../config/firebase-config";

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const {userID} = useGetUserInfo();

  const transactionCollectionRef = collection(db, "transactions");

  const getTransactions = async () => {
    try {

      const queryTransactions = query(
        transactionCollectionRef,
        where("userID", "==", userID),
        orderBy("createdAt")
      );

      
    } catch (err) {
      console.error(err);
    }

    return () => unsubscribe();
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return { transactions };
};