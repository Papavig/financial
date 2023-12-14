// Import necessary modules and components
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

// Custom hook for adding income records
export const useAddIncome = () => {
  
  // Reference to the "Income" collection in Firestore
  const IncomeCollectionRef = collection(db, "Income");

  // Get user information using another custom hook
  const { userID } = useGetUserInfo();

  // Function to add an income record to Firestore
  const addIncome = async ({ incomeDescription, incomeAmount }) => {
    try {
      // Add a new document to the "Income" collection with user-specific data
      await addDoc(IncomeCollectionRef, {
        userID,
        incomeDescription,
        incomeAmount,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error adding income:", error);
    }
  };
  return { addIncome };
};
