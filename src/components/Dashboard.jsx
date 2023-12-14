import { useState, React } from "react";
import { BsCurrencyRupee } from "react-icons/bs";

import { useAddExpanse } from "../hooks/useAddExpanse";
import { useAddIncome } from "../hooks/useAddIncome";
import { useGetExpanse } from "../hooks/useGetExpanse";
import { useGetIncome } from "../hooks/useGetIncome";

import { useGetUserInfo } from "../hooks/useGetUserInfo";

import Navbar from "./Navbar";

function Dashboard() {
  const { addExpanse } = useAddExpanse();
  const { addIncome } = useAddIncome();
  const { Expanses, expanseTotals } = useGetExpanse();
  const { Incomes, incomeTotals } = useGetIncome();
  const { name } = useGetUserInfo();

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  let balance = incomeTotals.income - expanseTotals.expenses;

  const handleExpanseSubmit = (e) => {
    e.preventDefault();

    addExpanse({
      description,
      transactionAmount,
    });

    setDescription("");
    setTransactionAmount("");
  };

  const handleIncomeSubmit = (e) => {
    e.preventDefault();

    addIncome({
      description,
      transactionAmount,
    });
  };

  return (
    <>
      <Navbar />
      <div className="m-0 h-screen">
        <div className="text-left my-6 mb-5">
          <h3 className="text-white text-2xl font-pixel font-bold ml-6">
            Hello, <span className="text-mainText">{name}</span>
          </h3>
        </div>

        <hr className="border-dotted opacity-60" />

        <div className="container mx-auto p-8">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-mainAccent rounded-2xl p-4 md:p-6 shadow-md text-left">
              <h2 className="text-mainText text-2xl font-bold font-pixel mb-4 text-left">
                Total Balances
              </h2>
              <p className="text-white font-medium mb-2 font-pixel text-2xl sm:text-4xl flex items-center">
                {balance >= 0 ? (
                  <span className="flex items-center">
                    <BsCurrencyRupee className="text-xl sm:text-2xl" />
                    {balance}
                  </span>
                ) : (
                  <span className="flex items-center text-red-500">
                    <span className="text-xl"> - </span> <BsCurrencyRupee className="text-xl sm:text-2xl" />
                    <span>{balance * -1}</span>
                  </span>
                )}
              </p>
            </div>

            <div className="bg-mainAccent rounded-2xl p-4 md:p-6 shadow-md text-left">
              <h2 className="text-mainText text-2xl font-bold font-pixel mb-4 text-left">
                Total Expense
              </h2>
              <p className="text-white font-medium mb-2 font-pixel text-2xl sm:text-4xl flex items-center">
                <BsCurrencyRupee className="text-xl sm:text-2xl" />
                {expanseTotals.expenses}
              </p>
            </div>

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

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-mainAccent rounded-2xl p-6 shadow-md text-left">
              <form onSubmit={handleExpanseSubmit}>
                <h2 className="text-mainText text-2xl font-bold font-pixel mb-4 text-left">
                  Expance
                </h2>
                <div className="my-2 mb-4">
                  <h4 className="text-white font-medium mb-2">Expance Name</h4>
                  <input
                    type="text"
                    className="w-full rounded-xl p-1 pl-4 text-white bg-main opacity-50 border-none"
                    placeholder="Eg. Bill"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="my-2 mt-4">
                  <h4 className="text-white font-medium mb-2">Amount</h4>
                  <input
                    type="number"
                    className="w-full rounded-xl p-1 pl-4 text-white bg-main opacity-50 border-none"
                    placeholder="Eg. 550"
                    value={transactionAmount}
                    onChange={(e) => setTransactionAmount(e.target.value)}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="my-2 mt-4">
                  <h4 className="text-white font-medium mb-2">Amount</h4>
                  <input
                    type="number"
                    className="w-full rounded-xl p-1 pl-4 text-white bg-main opacity-50 border-none"
                    placeholder="Eg. 1400"
                    value={transactionAmount}
                    onChange={(e) => setTransactionAmount(e.target.value)}
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
                  Your recent Expense
                </h2>
                {Expanses.map((Expance) => {
                  const { id, description, transactionAmount } = Expance;
                  return (
                    <li key={id} className="text-white">
                      <p className="flex items-center">
                        {description} -
                        <BsCurrencyRupee />
                        {transactionAmount}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-mainAccent rounded-2xl p-6 shadow-md text-left">
              <ul>
                <h2 className="text-2xl text-mainText font-pixel mb-2">
                  Your recent Income
                </h2>
                {Incomes.map((Income) => {
                  const { id, description, transactionAmount } = Income;
                  return (
                    <li key={id} className="text-white">
                      <p className="flex items-center">
                        {description} -
                        <BsCurrencyRupee />
                        {transactionAmount}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
