import React from "react";
import { IoBusiness } from "react-icons/io5";
import LoginForm from "../../components/auth/LoginForm";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white w-full bg-gradient-to-r from-primary to-black py-5 flex">
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-center w-full max-w-[2000px] mx-auto  px-2 lg:px-0">
        <div className="flex flex-col items-center justify-center space-y-3 px-16 text-center w-[400px] order-2 lg:order-1">
          <IoBusiness size={45} />
          <h2 className="font-semibold text-2xl">Добре дошли !</h2>
          <p className="font-light py-3">Нямате акаунт ?</p>
          <button
            className="text-black bg-white px-8 py-1 rounded-full"
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Регистрирай
          </button>
        </div>
        <div className="flex flex-col items-center jutify-center bg-gray-200 w-full rounded-lg lg:rounded-r-none lg:rounded-l-[140px] order-1 lg:order-2">
          <h1 className="text-black font-semibold text-2xl my-3">Вход</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
