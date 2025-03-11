import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const BusinessRefForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Невалиден имейл адрес")
      .required("Имейл адресът е задължителен"),
    firstName: Yup.string()
      .min(2, "Първото име трябва да бъде поне 2 символа")
      .required("Първото име е задължително"),
    lastName: Yup.string()
      .min(2, "Фамилията трябва да бъде поне 2 символа")
      .required("Фамилията е задължителна"),
    phone: Yup.string()
      .matches(/^(\+?(\d{1,3}))?(\d{9,15})$/, "Телефонният номер не е валиден")
      .required("Телефонният номер е задължителен"),
    password: Yup.string()
      .min(6, "Паролата трябва да бъде поне 6 символа")
      .required("Паролата е задължителна"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Паролите трябва да съвпадат")
      .required("Паролата трябва да съвпада"),
    subscribe: Yup.boolean(),
    designerType: Yup.string().required("Типът дизайнер е задължителен"),
  });

  const typeOfDesigner = {
    title: "Интериорен дизайнер",
    options: [
      "Мениджър на проект",
      "Собственик",
      "Инвеститор",
      "Архитект",
      "Дистрибутор",
      "Търговец",
    ],
  };

  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        password: "",
        confirmPassword: "",
        subscribe: false,
        designerType: typeOfDesigner.title, // Set the default selected type
      }}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values) => {
        console.log("Form data:", values);
      }}
    >
      {({ values, touched, errors, setFieldValue, handleSubmit }) => (
        <Form className="text-black w-full px-5 lg:px-20 py-5" onSubmit={handleSubmit}>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                Име на фирма/студио
              </label>
              <Field
                id="companyName"
                name="companyName"
                placeholder="IKIS-LIGHT"
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-primary border-none"
              />
              {touched.firstName && errors.firstName && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.firstName}
                </div>
              )}
            </div>
            <div className="w-1/2">
              <label
                htmlFor="bulstad"
                className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                Булстат
              </label>
              <Field
                id="bulstad"
                name="bulstad"
                placeholder="12345678"
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-primary border-none"
              />
              {touched.lastName && errors.lastName && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.lastName}
                </div>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Телефон
            </label>
            <Field
              id="phone"
              name="phone"
              type="tel"
              placeholder="0886507787"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-primary border-none"
            />
            {touched.phone && errors.phone && (
              <div className="text-red-500 text-xs mt-1">{errors.phone}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Имейл
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="example@ikis.com"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-primary border-none"
            />
            {touched.email && errors.email && (
              <div className="text-red-500 text-xs mt-1">{errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="designerType"
              className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Тип на дизайнер
            </label>
            <Field
              as="select"
              id="designerType"
              name="designerType"
              className="wmk-select mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none"
              style={{
                "--wmk-option-hover-bg": "#ff0000",
                "--wmk-option-active-bg": "#ff0000",
                "--wmk-option-focus-bg": "#ff0000",
              }}
            >
              <option value="" disabled>
                Изберете тип дизайнер
              </option>
              {typeOfDesigner.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Field>

            {touched.designerType && errors.designerType && (
              <div className="text-red-500 text-xs mt-1">
                {errors.designerType}
              </div>
            )}
          </div>

          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                Парола
              </label>
              <Field
                id="password"
                name="password"
                placeholder="******"
                type="password"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-primary border-none"
              />
              {touched.password && errors.password && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.password}
                </div>
              )}
            </div>
            <div className="w-1/2">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                Потвърдете паролата
              </label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="******"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-primary border-none"
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </div>
              )}
            </div>
          </div>

          <div className="mb-4 flex gap-4 sm:gap-0 flex-col sm:flex-row items-center justify-between px-3">
            <div className="flex items-center gap-1">
              <Field
                id="subscribe"
                name="subscribe"
                type="checkbox"
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  appearance: "none",
                  width: "20px",
                  height: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "3px",
                  cursor: "pointer",
                  backgroundColor: values.subscribe ? "red" : "white",
                  backgroundImage: values.subscribe
                    ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='white' stroke-width='2' d='M2 8l4 4 8-8'/%3E%3C/svg%3E\")"
                    : "none",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                onChange={() => setFieldValue("subscribe", !values.subscribe)}
              />
              <label
                htmlFor="subscribe"
                className="text-sm font-medium text-gray-700"
              >
                Абонирайте се за имейли
              </label>
            </div>
            <button
              type="submit"
              className="bg-primary text-white py-2 px-6 w-full rounded-full hover:scale-105 max-w-[300px]"
            >
              Регистрирайте се
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BusinessRefForm;
