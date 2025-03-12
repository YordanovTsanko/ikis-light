import React from "react";
import { IoBusiness } from "react-icons/io5";
import LoginForm from "../../components/auth/LoginForm";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white w-full bg-gradient-to-r from-primary to-black py-5 flex">
      <div className="absolute inset-0 z-10">
        <img
          src="/5197214.jpg"
          alt="error"
          className="h-full w-full object-cover grayscale contrast-75 opacity-25"
        />
      </div>
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-center w-full max-w-[2000px] mx-auto relative z-20  px-2 lg:px-0">
        <div className="flex flex-col items-center justify-center space-y-3 px-16 text-center  md:w-[800px] lg:w-[400px] order-2 lg:order-1">
          <IoBusiness size={45} />
          <h2 className="font-semibold text-2xl hidden lg:block">
            Добре дошли !
          </h2>
          <p className="font-light py-3">Нямате акаунт ?</p>
          <button
            className="text-black bg-white px-8 py-2 rounded-full"
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Регистрирай се сега
          </button>
        </div>
        <div className="flex flex-col relative items-center jutify-center bg-gray-200 p-2 w-full rounded-lg lg:rounded-r-none lg:rounded-l-[140px] order-1 lg:order-2">
          <div className="absolute inset-0 z-10  rounded-lg lg:rounded-r-none lg:rounded-l-[140px]">
            <img
              src="/5197214.jpg"
              alt="error"
              className="h-full w-full object-cover grayscale contrast-75 opacity-25 rounded-lg lg:rounded-r-none lg:rounded-l-[140px]"
            />
          </div>
          <div className=" w-full flex flex-col items-center jutify-center bg-gray-200 rounded-lg max-w-lg relative z-20">
            <h1 className="text-black font-semibold text-2xl mt-10">Вход</h1>
            <LoginForm />
            <p className="text-black flex items-center justify-center w-full px-5 lg:px-44 mb-5">
              <span className="flex-1 border-t border-gray-400"></span>
              <span className="px-3">или</span>
              <span className="flex-1 border-t border-gray-400"></span>
            </p>
            <div className="flex flex-col px-2 md:px-0 md:flex-row gap-5 w-full max-w-md mb-10">
              <button
                className="flex items-center justify-center w-full bg-white text-primary border border-primary hover:text-white 
    py-2 px-4 rounded-md hover:bg-red-600 transition"
              >
                <svg className="w-5 h-5 mr-2 flex-shrink-0" viewBox="0 0 48 48">
                  <path
                    fill="#4285F4"
                    d="M24 22v4h10.7c-.5 2.2-1.8 4-3.6 5.2v4.3h5.9c3.5-3.2 5.5-7.9 5.5-13.5 0-1.2-.1-2.4-.3-3.5H24z"
                  />
                  <path
                    fill="#34A853"
                    d="M10.5 28.6c1.3 3.8 4.9 6.4 9 6.4 2.7 0 5.2-.9 7.1-2.4l-3.5-2.7c-1 .7-2.2 1.1-3.6 1.1-2.7 0-5-1.8-5.8-4.2H10.5v1.8z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M24 10c2.4 0 4.5.8 6.2 2.3l4.6-4.6C31.7 4.4 28.1 3 24 3c-5.1 0-9.6 2.9-12 7l4.7 3.7c1.3-3.6 4.6-6.1 8.3-6.1z"
                  />
                  <path
                    fill="#EA4335"
                    d="M3 14.3l4.7 3.7c-.8 1.5-1.2 3.2-1.2 5 0 1.8.4 3.5 1.2 5l-4.7 3.7C1.4 28.8 0 25.6 0 22s1.4-6.8 3-7.7z"
                  />
                </svg>
                <span className="flex-grow text-center">Влез с Google</span>
              </button>

              <button className="flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="white"
                    d="M22.675 0h-21.35C.596 0 0 .598 0 1.334v21.332C0 23.402.596 24 1.325 24h11.493v-9.294H9.292v-3.622h3.526V8.413
          c0-3.488 2.126-5.393 5.233-5.393 1.487 0 2.763.109 3.136.158v3.638h-2.154c-1.688 0-2.015.8-2.015 1.972v2.586h4.03l-.524 
          3.622h-3.506V24h6.874C23.404 24 24 23.402 24 22.666V1.334C24 .598 23.404 0 22.675 0z"
                  />
                </svg>
                <span className="flex-grow text-center">Влез с Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
