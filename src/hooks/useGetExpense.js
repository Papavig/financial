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

// Custom hook for retrieving expense records
export const useGetExpanse = () => {
  // State to store the list of expenses
  const [Expenses, setExpenses] = useState([]);

  // State to store the total expenses
  const [expenseTotals, setExpenseTotals] = useState({
    expenses: 0.0,
  });

  // Reference to the "Expanse" collection in Firestore
  const ExpenseCollectionRef = collection(db, "Expanse");

  // Get user information using another custom hook
  const { userID } = useGetUserInfo();

  // Function to retrieve expense records and calculate total expenses
  const getExpense = async () => {
    let unsubscribe;

    try {
      // Define a query to filter expenses based on user ID and order them by createdAt
      const queryExpense = query(
        ExpenseCollectionRef,
        where("userID", "==", userID),
        orderBy("createdAt")
      );

      // Set up a snapshot listener to get real-time updates
      unsubscribe = onSnapshot(queryExpense, (snapshot) => {
        let docs = [];
        let totalExpenses = 0;

        // Process each document in the snapshot
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          // Add document data to the array
          docs.push({ ...data, id });

          // Update total expenses
          totalExpenses += Number(data.expenseAmount);
        });

        // Update state with the list of expenses and total expenses
        setExpenses(docs);

        setExpenseTotals({
          expenses: totalExpenses,
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
    getExpense();
  }, []);

  return { Expenses, expenseTotals };
};
