import React, { Component } from "react";
import app from "./utils/firebase.utils.js";

export default function LoginPage() {
  return (
    <>
      <div className="flex  h-screen">
        {/* firebase part of the code */}
        <div className="bg-gray-100 w-full h-full flex items-center justify-center">
          {/*google login button*/}
          <div className="bg-white p-4 rounded-lg shadow-lg w-96 h-64 flex flex-col items-center justify-around">
            <img
              src="https://static.vecteezy.com/system/resources/previews/010/353/285/non_2x/colourful-google-logo-on-white-background-free-vector.jpg"
              alt="Google Logo"
              className="h-14 w-14 mr-2 rounded-full border-2 border-blue-500"
            />
            <button
              onClick={() => {}}
              className="text-gray-900 px-4 py-1 rounded-full border-2   hover:bg-blue-300 hover:text-white active:bg-blue-500 flex items-center justify-around   border-blue-300  shadow-md hover:shadow-lg transition text-center"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/010/353/285/non_2x/colourful-google-logo-on-white-background-free-vector.jpg"
                alt="Google Logo"
                className="h-10 w-10 mr-2 rounded-full "
              /> 
              <span>Login with google</span>

            </button>
          </div>
        </div>

        {/* facebook part of the code */}
        <div className="bg-blue-200 w-full h-full">dsfdsfdsfdsf</div>
      </div>
    </>
  );
}
