import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom"; // Assuming React Router is used

const LoginForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Невалиден имейл адрес")
      .required("Имейл адресът е задължителен"),
    password: Yup.string()
      .min(6, "Паролата трябва да бъде поне 6 символа")
      .required("Паролата е задължителна"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        rememberMe: false,
      }}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values, { setFieldError }) => {
        console.log("Login data:", values);

        // Simulating an error from the backend (example)
        if (values.email !== "test@example.com") {
          setFieldError("email", "Този имейл не е регистриран");
        }
      }}
    >
      {({ values, touched, errors, setFieldValue, handleSubmit }) => (
        <Form className="text-black w-full px-20 py-5" onSubmit={handleSubmit}>
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
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Парола
            </label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="******"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-primary border-none"
            />
            {touched.password && errors.password && (
              <div className="text-red-500 text-xs mt-1">{errors.password}</div>
            )}
          </div>

          <div className="mb-4 flex gap-4 sm:gap-0 flex-col sm:flex-row items-center justify-between px-3">
            <div className="flex items-center gap-1">
              <Field
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                onChange={() => setFieldValue("rememberMe", !values.rememberMe)}
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  appearance: "none",
                  width: "20px",
                  height: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "3px",
                  cursor: "pointer",
                  backgroundColor: values.rememberMe ? "red" : "white",
                  backgroundImage: values.rememberMe
                    ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='white' stroke-width='2' d='M2 8l4 4 8-8'/%3E%3C/svg%3E\")"
                    : "none",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <label
                htmlFor="rememberMe"
                className="text-sm font-medium text-gray-700"
              >
                Запомни ме
              </label>
            </div>

            <Link to="/forgot-password" className="text-primary text-sm">
              Забравена парола?
            </Link>
          </div>

          <button
            type="submit"
            className="bg-primary text-white py-2 px-6 w-full rounded-full hover:scale-105 w-[200px] relative float-end"
          >
            Влезте
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
