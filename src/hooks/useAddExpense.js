// Import necessary modules and components
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

// Custom hook for adding expense records
export const useAddExpense = () => {

  // Reference to the "Expanse" collection in Firestore
    const ExpenseCollectionRef = collection(db, "Expanse");

    // Get user information using another custom hook
    const { userID } = useGetUserInfo();
    
    // Function to add an expense record to Firestore
    const addExpense = async ({
      expenseDescription,
      expenseAmount,
    }) => {
      try {
        // Add a new document to the "Expanse" collection with user-specific data
        await addDoc(ExpenseCollectionRef, {
          userID,
          expenseDescription,
          expenseAmount,
          createdAt: serverTimestamp(),
        });
      } catch (error) {
        console.error("Error adding expense:", error);
      }
    };
    return { addExpense };
  };