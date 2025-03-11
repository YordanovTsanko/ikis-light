import React, { useState } from "react";
import { IoBusiness } from "react-icons/io5";
import RegistrationForm from "../../components/auth/RegistrationForm";
import BusinessRefForm from "../../components/auth/BusinessRefForm";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [selected, setSelected] = useState(true);

  const navigate = useNavigate();

  const toggleSelection = (isPrivate) => {
    setSelected(isPrivate);
  };

  return (
    <div className="min-h-screen text-white w-full bg-gradient-to-r from-primary to-black py-5 flex">
      <div className="flex flex-col gap-5 lg:flex-row lg:gap-0 items-center justify-center w-full max-w-[2000px] mx-auto p-2 lg:p-0">
        <div className="flex flex-col items-center justify-center space-y-3 px-16 text-center w-[400px] order-2 lg:order-1">
          <IoBusiness size={45} />
          <h2 className="font-semibold text-2xl">Добре дошли !</h2>
          <p className="font-light py-3">Вече имате акаунт ?</p>
          <button
            className="text-black bg-white px-8 py-1 rounded-full"
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            Вход
          </button>
        </div>
        <div className="flex flex-col items-center jutify-center bg-gray-200 w-full rounded-lg lg:rounded-r-none lg:rounded-l-[140px] order-1">
          <div className="flex items-center justify-end pt-8 me-5 w-full">
            <div className="bg-primary flex gap-2 p-1 rounded-full">
              <p
                className={`${
                  selected
                    ? "bg-white text-primary"
                    : " hover:bg-white hover:text-primary"
                } cursor-pointer px-5 py-1 rounded-full`}
                onClick={() => toggleSelection(true)}
              >
                Частно лице
              </p>
              <p
                className={`${
                  !selected
                    ? "bg-white text-primary"
                    : " hover:bg-white hover:text-primary"
                } cursor-pointer px-5 py-1 rounded-full`}
                onClick={() => toggleSelection(false)}
              >
                Бизнес акаунт
              </p>
            </div>
          </div>
          <h1 className="text-black text-center font-semibold text-2xl my-3">
            Регистрирай се като {selected ? "частно лице" : "бизнес акаунт"}
          </h1>
          {selected ? <RegistrationForm /> : <BusinessRefForm />}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
