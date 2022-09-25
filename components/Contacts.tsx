import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import Alert from "./Alert";

export default function Contacts() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: (values) => {
      axios.post("./api/sendMail", { values }).then((res) => console.log(res));
    },
    validationSchema: yup.object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      phone: yup.string().required(),
      email: yup.string().email().required(),
      message: yup.string().required(),
    }),
  });
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="./images/women.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-16">
        <div className="lg:pr-8">
          <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let's work together
            </h2>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
              We’d love to hear from you! Send us a message using the form
              opposite, or email us. We’d love to hear from you! Send us a
              message using the form opposite, or email us.
            </p>
            <form
              action="#"
              method="POST"
              onSubmit={formik.handleSubmit}
              className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                {formik.errors.firstName && formik.touched.firstName ? (
                  <Alert alert={formik.errors.firstName} />
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                {formik.errors.lastName && formik.touched.lastName ? (
                  <Alert alert={formik.errors.lastName} />
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                {formik.errors.email && formik.touched.email ? (
                  <Alert alert={formik.errors.email} />
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mt-2"
                  >
                    Phone
                  </label>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    autoComplete="tel"
                    aria-describedby="phone-description"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                {formik.errors.phone && formik.touched.phone ? (
                  <Alert alert={formik.errors.phone} />
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="how-can-we-help"
                    className="block text-sm font-medium text-gray-700 mt-2"
                  >
                    How can we help you?
                  </label>
                  <span
                    id="how-can-we-help-description"
                    className="text-sm text-gray-500"
                  >
                    Max. 500 characters
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    aria-describedby="how-can-we-help-description"
                    rows={4}
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue={""}
                  />
                </div>
                {formik.errors.message && formik.touched.message ? (
                  <Alert alert={formik.errors.message} />
                ) : null}
              </div>
              <div className="text-right sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
