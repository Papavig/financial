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

export const useGetExpanse = () => {
  const [Expanses, setExpanses] = useState([]);
  const [expanseTotals, setExpanseTotals] = useState({
    expenses: 0.0,
  });

  const ExpanseCollectionRef = collection(db, "Expanse");
  const { userID } = useGetUserInfo();

  const getExpanse = async () => {
    let unsubscribe;
    try {
      const queryExpanse = query(
        ExpanseCollectionRef,
        where("userID", "==", userID),
        orderBy("createdAt")
      );

      unsubscribe = onSnapshot(queryExpanse, (snapshot) => {
        let docs = [];
        let totalExpenses = 0;

        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });

          totalExpenses += Number(data.transactionAmount);

          //console.log(totalExpenses);
        });

        setExpanses(docs);

        setExpanseTotals({
          expenses: totalExpenses,
        });
      });
    } catch (err) {
      console.error(err);
    }

    return () => unsubscribe();
  };

  useEffect(() => {
    getExpanse();
  }, []);

  return { Expanses, expanseTotals };
};