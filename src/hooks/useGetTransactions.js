import { useEffect, useState } from "react";
import {
  query,
  collection,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

import { userID } from "./useGetUserInfo"
import { db } from "../config/firebase-config";

  export const useGetTransactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [transactionTotals, setTransactionTotals] = useState({
      income: 0.0,
      expenses: 0.0,
    });

  const transactionCollectionRef = collection(db, "transactions");

  const getTransactions = async () => {
    let unsubscribe;
    try {

      const queryTransactions = query(
        transactionCollectionRef,
        where("userID", "==", userID),
        orderBy("createdAt")
      );

      onSnapshot(queryTransactions, (snapshot) => {
        let docs = [];

        unsubscribe = snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id})
        })
      })

      
    } catch (err) {
      console.error(err);
    }

    return () => unsubscribe();
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return { transactions, transactionTotals };
};