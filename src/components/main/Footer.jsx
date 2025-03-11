import React from "react";
import { BsLinkedin, BsFacebook, BsInstagram, BsPinterest} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10">
        <div className="p-5">
          <h2 className="font-bold text-xl mb-2">Информацция</h2>
            <p className="text-md hover:text-gray-400 cursor-pointer">За Нас</p>
            <p className="text-md hover:text-gray-400 cursor-pointer">Потребителски права</p>
            <p className="text-md hover:text-gray-400 cursor-pointer">Политика за бисквитки</p>
            <p className="text-md hover:text-gray-400 cursor-pointer">Политика за поверителност</p>
            <p className="text-md hover:text-gray-400 cursor-pointer">Контакти</p>
        </div>
        <div className="p-5 flex flex-col gap-10">
          <div className="">
            <h2  className="font-bold text-xl mb-2">Работно време</h2>
            <p className="text-md hover:text-gray-400 cursor-pointer">Понеделник - Петък 09:30 - 18:30</p>
          </div>
          <div>
            <h2  className="font-bold text-xl mb-2">Адрес</h2>
            <p className="text-md hover:text-gray-400 cursor-pointer">
              <span>Офис</span>- ул.Бяло поле 3, Комфорт офис център, ет.5,
              оф.18
            </p>
          </div>
        </div>
        <div className="p-5">
          <h2 className="font-bold text-xl mb-2">Контакти</h2>
          <p className="text-md hover:text-gray-400 cursor-pointer">+359 886 507 787</p>
          <p className="text-md hover:text-gray-400 cursor-pointer">+359 887 606 909</p>
          <p>
            <span className="font-semibold">Имейл:</span> office@ikis-light.com
          </p>
        </div>
        <div className="p-5">
          <img src="/logo_light.png" className="w-full" alt="IKIS Light" />
          <div className="flex gap-2 text-xl mt-2 relative float-end text-white">
            <BsLinkedin />
            <BsFacebook />
            <BsInstagram />
            <BsPinterest />
          </div>
        </div>
      </div>
      <div className="flex justify-center p-5 bg-black">
        <p>Copyright ©ikislight. Всички права запазени</p>
      </div>
    </footer>
  );
};

export default Footer;
