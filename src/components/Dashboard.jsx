//Importing necessary dependencies and components
import { useState, React } from "react";
import { BsCurrencyRupee } from "react-icons/bs";

// Importing custom hooks
import { useAddExpense } from "../hooks/useAddExpense";
import { useAddIncome } from "../hooks/useAddIncome";
import { useGetExpanse } from "../hooks/useGetExpense";
import { useGetIncome } from "../hooks/useGetIncome";
import { useGetUserInfo } from "../hooks/useGetUserInfo";

// Importing the Navbar component
import Navbar from "./Navbar";

function Dashboard() {
  // Custom hooks to manage expenses and incomes
  const { addExpense } = useAddExpense();
  const { addIncome } = useAddIncome();
  const { Expenses, expenseTotals } = useGetExpanse();
  const { Incomes, incomeTotals } = useGetIncome();
  const { name } = useGetUserInfo();

  // State variables for expense and income input fields
  const [expenseDescription, setExpenseDescription] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [incomeDescription, setIncomeDescription] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");

  // Calculating the balance
  let balance = incomeTotals.income - expenseTotals.expenses;

  // Handling expense form submission
  const handleExpenseSubmit = (e) => {
    e.preventDefault();

    addExpense({
      expenseDescription,
      expenseAmount,
    });

    // Resetting form fields
    setExpenseDescription("");
    setExpenseAmount("");
  };

  // Handling income form submission
  const handleIncomeSubmit = (e) => {
    e.preventDefault();

    addIncome({
      incomeDescription,
      incomeAmount,
    });

    // Resetting form fields
    setIncomeDescription("");
    setIncomeAmount("");
  };

  return (
    <>
      <Navbar />
      <div className="m-0">
        <div className="text-left my-6 mb-5">
          <h3 className="text-white text-2xl font-pixel font-bold ml-6">
            Hello, <span className="text-mainText">{name}</span>
          </h3>
        </div>

        <hr className="border-dotted border-white opacity-60" />

        {/* Total balance card */}
        <div className="container mx-auto p-8">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-mainAccent rounded-2xl p-4 md:p-6 shadow-md text-left">
              <h2 className="text-mainText text-2xl font-bold font-pixel mb-4 text-left">
                Total Balance
              </h2>

              {/* Displaying the balance with a custom formatting */}
              <p className="text-white font-medium mb-2 font-pixel text-2xl sm:text-4xl flex items-center">
                {/* Checking if the balance is greater than or equal to zero */}
                {balance >= 0 ? (
                  // Displaying positive balance
                  <span className="flex items-center">
                    <BsCurrencyRupee className="text-xl sm:text-2xl" />
                    {balance}
                  </span>
                ) : (
                  //Displaying negative balance
                  <span className="flex items-center text-red-500">
                    <span className="text-xl"> - </span>{" "}
                    <BsCurrencyRupee className="text-xl sm:text-2xl" />
                    <span>{balance * -1}</span>
                  </span>
                )}
              </p>
            </div>

            {/* Total Expense Card */}
            <div className="bg-mainAccent rounded-2xl p-4 md:p-6 shadow-md text-left">
              <h2 className="text-mainText text-2xl font-bold font-pixel mb-4 text-left">
                Total Expense
              </h2>
              <p className="text-white font-medium mb-2 font-pixel text-2xl sm:text-4xl flex items-center">
                <BsCurrencyRupee className="text-xl sm:text-2xl" />
                {expenseTotals.expenses}
              </p>
            </div>

            {/* Total Income card */}
            <div className="bg-mainAccent rounded-2xl p-4 md:p-6 shadow-md text-left">
              <h2 className="text-mainText text-2xl font-bold font-pixel mb-4 text-left">
                Total Income
              </h2>
              <p className="text-white font-medium mb-2 font-pixel text-2xl sm:text-4xl flex items-center">
                <BsCurrencyRupee className="text-xl sm:text-2xl" />
                {incomeTotals.income}
              </p>
            </div>
          </div>

          {/* Expense form */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-mainAccent rounded-2xl p-6 shadow-md text-left">
              <form onSubmit={handleExpenseSubmit}>
                <h2 className="text-mainText text-2xl font-bold font-pixel mb-4 text-left">
                  Expense
                </h2>
                <div className="my-2 mb-4">
                  <h4 className="text-white font-medium mb-2">Expance Name</h4>
                  <input
                    type="text"
                    className="w-full rounded-xl p-1 pl-4 text-white bg-main opacity-50 border-none"
                    placeholder="Eg. Bill"
                    value={expenseDescription}
                    onChange={(e) => setExpenseDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="my-2 mt-4">
                  <h4 className="text-white font-medium mb-2">Amount</h4>
                  <input
                    type="number"
                    className="w-full rounded-xl p-1 pl-4 text-white bg-main opacity-50 border-none"
                    placeholder="Eg. 550"
                    value={expenseAmount}
                    onChange={(e) => setExpenseAmount(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-start">
                  <button
                    className="bg-btn1 hover:bg-hbtn1 text-white font-medium py-2 px-6 w-1/4 rounded-2xl mr-2 focus:outline-none mt-6 ml-auto"
                    type="submit"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>

            {/* Income form */}
            <div className="bg-mainAccent rounded-2xl p-6 shadow-md text-left">
              <form onSubmit={handleIncomeSubmit}>
                <h2 className="text-mainText text-2xl font-bold font-pixel mb-4 text-left">
                  Income
                </h2>
                <div className="my-2 mb-4">
                  <h4 className="text-white font-medium mb-2">Income Name</h4>
                  <input
                    type="text"
                    className="w-full rounded-xl p-1 pl-4 text-white bg-main opacity-50 border-none"
                    placeholder="Eg. Freelance"
                    value={incomeDescription}
                    onChange={(e) => setIncomeDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="my-2 mt-4">
                  <h4 className="text-white font-medium mb-2">Amount</h4>
                  <input
                    type="number"
                    className="w-full rounded-xl p-1 pl-4 text-white bg-main opacity-50 border-none"
                    placeholder="Eg. 1400"
                    value={incomeAmount}
                    onChange={(e) => setIncomeAmount(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-start">
                  <button
                    className="bg-btn1 hover:bg-hbtn1 text-white font-medium py-2 px-6 w-1/4 rounded-2xl mr-2 focus:outline-none mt-6 ml-auto"
                    type="submit"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Container for recent transactions */}
        <div className="text-center mt-5">
          <h3 className="text-white text-2xl font-pixel font-bold ml-6">
            Transactions
          </h3>
        </div>
        <div className="container mx-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-mainAccent rounded-2xl p-6 shadow-md text-left">
              <ul>
                <h2 className="text-2xl text-mainText font-pixel mb-2">
                  Recent Expense
                </h2>

                {/* Mapping through Expenses array and displaying each expense */}
                {Expenses.map((Expence) => {
                  const { id, expenseDescription, expenseAmount } = Expence;
                  return (
                    <li key={id} className="text-white">
                      <p className="flex items-center">
                        {expenseDescription} -
                        <BsCurrencyRupee />
                        {expenseAmount}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-mainAccent rounded-2xl p-6 shadow-md text-left">
              <ul>
                <h2 className="text-2xl text-mainText font-pixel mb-2">
                  Recent Income
                </h2>

                {/* Mapping through Incomes array and displaying each income */}
                {Incomes.map((Income) => {
                  const { id, incomeDescription, incomeAmount } = Income;
                  return (
                    <li key={id} className="text-white">
                      <p className="flex items-center">
                        {incomeDescription} -
                        <BsCurrencyRupee />
                        {incomeAmount}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Footer section */}
          <footer className="text-white my-4 mt-8 py-6 text-center">
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
