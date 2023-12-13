import { useState, React } from "react";
import { BsCurrencyRupee } from "react-icons/bs";

import { useAddTransaction } from "../hooks/useAddTransaction";
//import { useGetTransactions } from "../hooks/useGetTransactions";

import Navbar from "./Navbar";
//import {authInfo} from "./Signup";

function Dashboard() {
  const { addTransaction } = useAddTransaction();
  //const {transactions} = useGetTransactions();

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      description,
      transactionAmount,
    });
  };

  return (
    <>
      <Navbar />
      <div className="h-screen m-0">
        <div className="text-left my-6 mb-5">
          <h3 className="text-white text-2xl font-pixel font-bold ml-6">
            Hello <span></span>
          </h3>
        </div>

        <hr className="border-dotted opacity-60" />

        <div className="container mx-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-mainAccent rounded-2xl p-6 shadow-md text-left">
              <h2 className="text-mainText text-2xl font-bold font-pixel mb-4 text-left">
                Total Expance
              </h2>
              <p className="text-white font-medium mb-2 font-pixel text-4xl flex items-center">
                <BsCurrencyRupee className="text-2xl" />
                500
              </p>
            </div>

            <div className="bg-mainAccent rounded-2xl p-6 shadow-md text-left">
              <h2 className="text-mainText text-2xl font-bold font-pixel mb-4 text-left">
                Total Income
              </h2>
              <p className="text-white font-medium mb-2 font-pixel text-4xl flex items-center">
                <BsCurrencyRupee className="text-2xl" />
                500
              </p>
            </div>

            <div className="bg-mainAccent rounded-2xl p-6 shadow-md text-left">
              <form onSubmit={handleSubmit}>
                <h2 className="text-mainText text-2xl font-bold font-pixel mb-4 text-left">
                  Expance
                </h2>
                <div className="my-2 mb-4">
                  <h4 className="text-white font-medium mb-2">Expance Name</h4>
                  <input
                    type="text"
                    className="w-full rounded-xl p-1 pl-4 text-white bg-main opacity-50 border-none"
                    placeholder="Eg. Bill"
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
              <form onSubmit={handleSubmit}>
                <h2 className="text-mainText text-2xl font-bold font-pixel mb-4 text-left">
                  Income
                </h2>
                <div className="my-2 mb-4">
                  <h4 className="text-white font-medium mb-2">Income Name</h4>
                  <input
                    type="text"
                    className="w-full rounded-xl p-1 pl-4 text-white bg-main opacity-50 border-none"
                    placeholder="Eg. Freelance"
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
      </div>
    </>
  );
}

export default Dashboard;
