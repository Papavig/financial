// Import necessary modules and components
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

// Custom hook for retrieving income records
export const useGetIncome = () => {
  // State to store the list of incomes
  const [Incomes, setIncomes] = useState([]);

  // State to store the total income
  const [incomeTotals, setIncomeTotals] = useState({
    income: 0.0,
  });

  // Reference to the "Income" collection in Firestore
  const incomeCollectionRef = collection(db, "Income");

  // Get user information using another custom hook
  const { userID } = useGetUserInfo();

  // Function to retrieve income records and calculate total income
  const getIncome = async () => {
    let unsubscribe;

    try {
      // Define a query to filter incomes based on user ID and order them by createdAt
      const queryIncome = query(
        incomeCollectionRef,
        where("userID", "==", userID),
        orderBy("createdAt")
      );

      // Set up a snapshot listener to get real-time updates
      unsubscribe = onSnapshot(queryIncome, (snapshot) => {
        let docs = [];
        let totalIncome = 0;

        // Process each document in the snapshot
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          // Add document data to the array
          docs.push({ ...data, id });

          // Update total income
          totalIncome += Number(data.incomeAmount);
        });

        // Update state with the list of incomes and total income
        setIncomes(docs);

        setIncomeTotals({
          income: totalIncome,
        });
      });
    } catch (err) {
      console.error(err);
    }

    // Return the unsubscribe function to be called when the component unmounts
    return () => unsubscribe();
  };

  // Use the useEffect hook to initiate the data retrieval
  useEffect(() => {
    getIncome();
  }, []);

  return { Incomes, incomeTotals };
};
