"use client";

import { useState } from "react";
import Toast from "./_components/Toast";
import { toast } from "@/lib/toast";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [queryType, setQueryType] = useState("");
  const [message, setMessage] = useState("");
  const [contactConsent, setContactConsent] = useState(false);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    contactConsent: "",
  });

  const validateFirstName = () => {
    if (!firstName.trim()) {
      setErrors((prev) => ({
        ...prev,
        firstName: "This field is required",
      }));

      return "This field is required";
    } else {
      setErrors((prev) => ({ ...prev, firstName: "" }));
      return "";
    }
  };

  const validateLastName = () => {
    if (!lastName.trim()) {
      setErrors((prev) => ({
        ...prev,
        lastName: "This field is required",
      }));

      return "This field is required";
    } else {
      setErrors((prev) => ({ ...prev, lastName: "" }));
      return "";
    }
  };

  const validateEmail = () => {
    if (!email.trim()) {
      setErrors((prev) => ({
        ...prev,
        email: "This field is required",
      }));

      return "This field is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));

      return "Please enter a valid email address";
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
      return "";
    }
  };

  const validateQueryType = () => {
    if (!queryType.trim()) {
      setErrors((prev) => ({
        ...prev,
        queryType: "Please select a query type",
      }));

      return "Please select a query type";
    } else {
      setErrors((prev) => ({ ...prev, queryType: "" }));
      return "";
    }
  };

  const validateMessage = () => {
    if (!message.trim()) {
      setErrors((prev) => ({
        ...prev,
        message: "This field is required",
      }));

      return "This field is required";
    } else {
      setErrors((prev) => ({ ...prev, message: "" }));
      return "";
    }
  };

  const validateConsent = () => {
    if (!contactConsent) {
      setErrors((prev) => ({
        ...prev,
        contactConsent:
          "To submit this form, please consent to being contacted",
      }));

      return "To submit this form, please consent to being contacted";
    } else {
      setErrors((prev) => ({ ...prev, contactConsent: "" }));
      return "";
    }
  };

  const handleValidation = (): boolean => {
    const newErrors = {
      firstName: validateFirstName(),
      lastName: validateLastName(),
      email: validateEmail(),
      queryType: validateQueryType(),
      message: validateMessage(),
      contactConsent: validateConsent(),
    };

    console.log(newErrors);
    setErrors(newErrors);

    if (Object.values(newErrors).some((e) => e !== "")) {
      {
        console.log("You have errors");
        return false;
      }
    }

    // validateFirstName();
    // validateLastName();
    // validateEmail();
    // validateQueryType();
    // validateMessage();
    // validateConsent();

    // Object.entries(errors).forEach((key, value) => {
    //   console.log(key, value);
    // });

    // for (const key in errors) {
    //   const typedKey = key as keyof typeof errors;
    //   console.log(key, errors[typedKey]);
    //   if (errors[typedKey] !== "") return false;
    // }

    return true;
  };

  return (
    <section className="min-h-dvh flex justify-center items-center">
      <div className="max-w-4xl bg-white flex flex-wrap gap-y-4 gap-x-4 px-[clamp(1rem,5vw,3rem)] py-10 rounded-3xl mx-8 my-32">
        <h1 className="text-[clamp(var(--text-3xl),8vw,(var(--text-4xl)))] text-gray-900 basis-full">
          Contact Us
        </h1>

        {/* First name */}
        <label
          className={`field field--half ${errors.firstName && "field--error"}`}
        >
          <span className="afterAsterisk">First Name</span>
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            onBlur={() => validateFirstName()}
          />
          <span className="error">{errors.firstName}</span>
        </label>

        {/* Last name */}
        <label
          className={`field field--half ${errors.lastName && "field--error"}`}
        >
          <span className="afterAsterisk">Last Name</span>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onBlur={() => validateLastName()}
          />
          <span className="error">{errors.lastName}</span>
        </label>

        {/* Email */}
        <label
          className={`field field--full ${errors.email && "field--error"}`}
        >
          <span className="afterAsterisk">Email Address</span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => validateEmail()}
          />
          <span className="error">{errors.email}</span>
        </label>

        {/* Query type */}
        <fieldset className="flex flex-col basis-full">
          <legend className="text-gray-900 afterAsterisk">Query Type</legend>

          {/* Radio buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <label
              htmlFor="general"
              className="relative overflow-hidden basis-[calc(50%-.5rem)] min-w-[30ch] grow p-4 flex items-center gap-4 border peer-checked:bg-amber-300 border-green-600 rounded-2xl cursor-pointer"
            >
              <input
                type="radio"
                name="queryType"
                id="general"
                className="peer sr-only"
                checked={queryType === "general"}
                onChange={(e) => {
                  setQueryType("general");
                  validateQueryType();
                }}
              />
              <div className="absolute inset-0 peer-checked:bg-green-200 pointer-events-none"></div>
              <span className="z-10 w-6 aspect-square rounded-full outline outline-gray-500 peer-checked:outline-none peer-checked:bg-[url(/icon-radio-selected.svg)] bg-cover bg-no-repeat bg-center"></span>
              <span className="z-10 grow">General Enquiry</span>
            </label>

            <label
              htmlFor="support"
              className="relative overflow-hidden basis-[calc(50%-.5rem)] min-w-[30ch] grow p-4 flex items-center gap-4 border border-green-600 rounded-2xl cursor-pointer"
            >
              <input
                type="radio"
                name="queryType"
                id="support"
                className="peer sr-only"
                checked={queryType === "support"}
                onChange={(e) => {
                  setQueryType("support");
                  validateQueryType();
                }}
              />
              <div className="absolute inset-0 peer-checked:bg-green-200 pointer-events-none"></div>
              <span className="z-10 w-6 aspect-square rounded-full outline outline-gray-500 peer-checked:outline-none peer-checked:bg-[url(/icon-radio-selected.svg)] bg-cover bg-no-repeat bg-center"></span>
              <span className="z-10 grow">Support Request</span>
            </label>
          </div>

          <span className="error text-red-500">{errors.queryType}</span>
        </fieldset>

        {/* Message */}
        <label
          className={`field field--full ${errors.message && "field--error"}`}
        >
          <p className="afterAsterisk">Message</p>
          <textarea
            name=""
            id=""
            rows={4}
            className=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => validateMessage()}
          ></textarea>
          <span className="error">{errors.message}</span>
        </label>

        {/* Consent checkbox */}
        <label className="field field--full field--horizontal flex-wrap mt-4">
          <input
            type="checkbox"
            name=""
            id=""
            className="peer sr-only "
            checked={contactConsent}
            onChange={(e) => {
              const isChecked = e.target.checked;
              setContactConsent(isChecked);

              if (!isChecked) {
                setErrors((prev) => ({
                  ...prev,
                  contactConsent:
                    "To submit this form, please consent to being contacted",
                }));
              } else {
                setErrors((prev) => ({ ...prev, contactConsent: "" }));
              }
            }}
          />
          <span className="w-6 aspect-square outline outline-green-600 rounded-sm peer-checked:bg-[url(/icon-checkbox-check.svg)] bg-cover bg-no-repeat"></span>
          <p className="ml-4 afterAsterisk">
            I consent to being contacted by the team
          </p>
          <span className="error basis-full">{errors.contactConsent}</span>
        </label>

        {/* Submit */}
        <button
          onClick={() => {
            const validationPassed = handleValidation();

            if (validationPassed) toast();
          }}
          className="btn btn--primary basis-full mt-8"
        >
          Submit
        </button>

        <Toast />
      </div>
    </section>
  );
}
