import React from "react";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { BsCurrencyRupee } from "react-icons/bs";

function Home() {
  const navigate = useNavigate();

  const signup = () => {
    navigate("/signup");
  };

  const error = () => {
    navigate("/404");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="mb-4">
          <img
            src="/assets/money_bag.png"
            alt="Some image"
            className="w-1/2 sm:w-1/4 md:w-1/6 h-auto mx-auto"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 font-pixel text-4xl sm:text-6xl lg:text-8xl tracking-widest text-mainText uppercase text-center">
          <h1>Master your financial universe</h1>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8 mb-20">
          <button
            className="bg-btn1 hover:bg-hbtn1 text-white font-medium py-2 px-4 rounded focus:outline-none"
            onClick={signup}
          >
            Get started
          </button>
        </div>
      </div>

      <div className="container my-12 mx-6 p-12 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-screen sm:container sm:mx-auto">
        <div className="md:order-2 text">
          <img
            src="/assets/building1.png"
            alt="Your First Photo"
            className="object-cover rounded-md w-full h-64 sm:w-2/3 sm:h-auto md:w-1/2 md:h-full lg:w-2/3 lg:h-2/3 xl:w-2/3 xl:h-2/3 mx-auto mb-4 md:mb-0"
          />
        </div>
        <div className="md:order-1 text-left md:ml-10 md:pl-12">
          <h2 className="text-4xl sm:text-2xl md:text-4xl text-mainText font-pixel font-bold mb-2 md:mb-4">
            Chart Your Financial Course: Empower Your Wealth
          </h2>
          <p className="text-white mb-4 text-base sm:text-lg md:text-base lg:text-lg opacity-70">
            Your financial journey is like sailing through uncharted waters.
            With each decision, you hold the compass to "Chart Your Financial
            Course: Empower Your Wealth." It's not just about the destination;
            it's about embracing the waves of opportunity and steering towards
            prosperity. Every budget, investment, and financial goal is a tool
            in your navigation kit. So, set sail with strategic planning, make
            informed choices, and witness how empowerment transforms your
            financial universe.
          </p>
        </div>

        <div className="md:order-3 text">
          <img
            src="/assets/building2.png"
            alt="Your Second Photo"
            className="object-cover rounded-md w-full h-64 sm:w-2/3 sm:h-auto md:w-1/2 md:h-full lg:w-2/3 lg:h-2/3 xl:w-2/3 xl:h-2/3 mx-auto mb-4 md:mb-0"
          />
        </div>
        <div className="md:order-4 text-left md:mr-10 md:pr-12">
          <h2 className="text-4xl sm:text-2xl md:text-4xl text-mainText font-pixel font-bold mb-2 md:mb-4">
            Compose Your Financial Symphony: Craft Success
          </h2>
          <p className="text-white mb-4 text-base sm:text-lg md:text-base lg:text-lg opacity-70">
            Life is a grand composition, and your financial decisions are the
            notes that shape it. "Compose Your Financial Symphony: Craft
            Success" invites you to be the conductor of your financial destiny.
            Each budget you create, every investment you choose, contributes to
            the melody of your prosperity. Embrace challenges as musical
            nuances, refining your composition. With dedication and planning,
            harmonize discipline and knowledge to create a masterpiece of
            wealth. Step onto the podium of financial empowerment, and let your
            symphony of success resonate in your financial universe.
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-8 lg:px-16 xl:px-32 pb-8 pt-12 md:pt-16 lg:pt-20 sm:container sm:mx-auto">
        <h3 className="text-white text-5xl font-bold font-pixel my-12 opacity-80">
          Plans
        </h3>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="shadow-lg rounded-3xl py-8 px-6 bg-mainAccent">
            <span className="mb-3 inline-block text-lg font-semibold text-white">
              Basic
            </span>
            <h3 className="font-pixel font-bold text-mainText text-4xl sm:text-6xl mb-6 flex items-center">
              free
            </h3>
            <ul className="space-y-3 opacity-70">
              <li className="text-sm text-white flex items-center">
                <TiTick />
                Budget Tracker
              </li>
              <li className="text-sm text-white flex items-center">
                <TiTick />
                Expense Recorder
              </li>
              <li className="text-sm text-white flex items-center">
                <TiTick />
                Secure Data
              </li>
              <li className="text-sm text-white flex items-center">
                <TiTick />
                Financial Reports
              </li>
            </ul>
            <button
              className="bg-btn1 hover:bg-hbtn1 text-white font-medium py-2 px-6 w-full rounded focus:outline-none mt-6"
              onClick={signup}
            >
              Sign Up
            </button>
          </div>

          <div className="shadow-lg rounded-3xl py-8 px-6 bg-mainAccent">
            <span className="mb-3 inline-block text-lg font-semibold text-white">
              Premium
            </span>
            <h3 className="font-pixel font-bold text-mainText text-4xl sm:text-6xl mb-6 flex items-center">
              <BsCurrencyRupee className="text-2xl" /> 299
            </h3>
            <ul className="space-y-3 opacity-70">
              <li className="text-sm text-white flex items-center">
                <TiTick />
                All Basic
              </li>
              <li className="text-sm text-white flex items-center">
                <TiTick />
                Goal Tracker
              </li>
              <li className="text-sm text-white flex items-center">
                <TiTick />
                Premium Support
              </li>
              <li className="text-sm text-white flex items-center">
                <TiTick />
                Financial Planning
              </li>
            </ul>
            <button
              className="bg-btn1 hover:bg-hbtn1 text-white font-medium py-2 px-6 w-full rounded focus:outline-none mt-6"
              onClick={error}
            >
              Get Premium
            </button>
          </div>

          <div className="shadow-lg rounded-3xl py-8 px-6 bg-mainAccent">
            <span className="mb-3 inline-block text-lg font-semibold text-white">
              Ultimate
            </span>
            <h3 className="font-pixel font-bold text-mainText text-4xl sm:text-6xl mb-6 flex items-center">
              <BsCurrencyRupee className="text-2xl" /> 399
            </h3>
            <ul className="space-y-3 opacity-70">
              <li className="text-sm text-white flex items-center">
                <TiTick />
                All Premium
              </li>
              <li className="text-sm text-white flex items-center">
                <TiTick />
                Investment Tips
              </li>
              <li className="text-sm text-white flex items-center">
                <TiTick />
                Retirement Planning
              </li>
              <li className="text-sm text-white flex items-center">
                <TiTick />
                Wealth Management
              </li>
            </ul>
            <button
              className="bg-btn1 hover:bg-hbtn1 text-white font-medium py-2 px-6 w-full rounded focus:outline-none mt-6"
              onClick={error}
            >
              Get Ultimate
            </button>
          </div>
        </div>

        <div className="container mt-8 p-4 md:p-8 lg:p-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-mainText font-pixel mb-4">
            Ready, Set
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed mb-8 opacity-70">
            Ready to get a head start on your financial future?
            <br />
            Sign up, it's time to watch your wealth grow!
          </p>
          <button
            className="bg-btn1 hover:bg-hbtn1 text-white font-medium py-2 px-4 rounded focus:outline-none"
            onClick={signup}
          >
            Start Now
          </button>
        </div>

        <footer className="text-white my-8 text-center">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
