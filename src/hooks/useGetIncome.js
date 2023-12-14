import { useEffect, useState } from "react";
import {
  query,
  collection,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetIncome= () => {
  const [Incomes, setIncomes] = useState([]);
  const [incomeTotals, setIncomeTotals] = useState({
    expenses: 0.0,
  });

  const incomeCollectionRef = collection(db, "Income");
  const { userID } = useGetUserInfo();

  const getIncome = async () => {
    let unsubscribe;
    try {
      const queryIncome = query(
        incomeCollectionRef,
        where("userID", "==", userID),
        orderBy("createdAt")
      );

      unsubscribe = onSnapshot(queryIncome, (snapshot) => {
        let docs = [];
        let totalIncome = 0;

        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });

          totalIncome += Number(data.transactionAmount);

          //console.log(totalIncome);
        });

        setIncomes(docs);

        setIncomeTotals({
          income: totalIncome,
        });
      });
    } catch (err) {
      console.error(err);
    }

    return () => unsubscribe();
  };

  useEffect(() => {
    getIncome();
  }, []);

  return { Incomes, incomeTotals };
};