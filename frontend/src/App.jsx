import { useState } from "react";
import "./App.css";
import frame from "./assets/frame.png";

function App() {
  return (
    <>
      <nav className="bg-violet-500 flex gap-46 p-4">
        <h1 className="text-white text-4xl">LeGenD</h1>
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/128/5358/5358649.png"
            className="invert"
          ></img>
        </button>
      </nav>
      <div className="flex gap-8 flex-col justify-items-center text-center">
        <div className="relative mt-20 text-center">
          <div className="bg-amber-100">
            <img src={frame} className="object-fill w-36"></img>
          </div>
          <p className="absolute block justify-self-center top-4 left-6 text-lg">
            Hello There!
          </p>
        </div>
        <p className="text-center text-4xl">
          My name is Legend and I'm a passionate Web Development
        </p>
        <p>
          I'm an undergraduate student at IIT Roorkee, interested in Tech and
          Product building
        </p>
        <div className="grid grid-cols-1 gap-2">
          <div>
            <button class="bg-violet-500 hover:bg-violet-600 text-white font-md py-2 px-4 rounded-full">
              My Resume
            </button>
          </div>
          <div>
            <button class="border-violet-500 border-3 text-black hover:bg-violet-500 hover:text-white font-md py-2 px-4 rounded-full">
              Hire Me
            </button>
          </div>
        </div>
        <img
          src="https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-4296.jpg?uid=R204064089&ga=GA1.1.37188644.1740345148&semt=ais_items_boosted&w=740"
          className="mb-10"
        ></img>
        <div className="flex-col justify-items-center space-y-4">
          <h1 className="font-semibold text-4xl mb-6">Services I Provide</h1>

          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-violet-600 dark:border-violet-500 basis-1/3">
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Web Development
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
            <a
              href="#"
              class="inline-flex font-medium items-center text-blue-600 hover:underline"
            >
              My Projects
              <svg
                class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-violet-600 dark:border-violet-500 basis-1/3">
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Web Development
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
            <a
              href="#"
              class="inline-flex font-medium items-center text-blue-600 hover:underline"
            >
              My Projects
              <svg
                class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-violet-600 dark:border-violet-500 basis-1/3">
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Web Development
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
            <a
              href="#"
              class="inline-flex font-medium items-center text-blue-600 hover:underline"
            >
              My Projects
              <svg
                class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>
          <div>
            <h1 className="text-4xl font-semibold">Technologies I Use</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
