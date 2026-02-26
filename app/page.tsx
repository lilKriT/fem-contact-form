"use client";

import { useState } from "react";
import Toast from "./_components/Toast";
import { toast } from "@/lib/toast";

export default function Home() {
  const [showToast, setShowToast] = useState(false);

  return (
    <section className="min-h-dvh flex justify-center items-center">
      <div className="max-w-4xl bg-white flex flex-wrap gap-y-4 gap-x-4 px-[clamp(1rem,5vw,3rem)] py-10 rounded-3xl mx-8 my-32">
        <h1 className="text-[clamp(var(--text-3xl),8vw,(var(--text-4xl)))] text-gray-900 basis-full">
          Contact Us
        </h1>

        <label className="field field--half">
          <span className="afterAsterisk">First Name</span>
          <input type="text" name="" id="" />
          <span className="error">This field is required</span>
        </label>

        <label className="field field--half">
          <span className="afterAsterisk">Last Name</span>
          <input type="text" />
          <span className="error">This field is required</span>
        </label>

        <label className="field field--full">
          <span className="afterAsterisk">Email Address</span>
          <input type="text" />
          <span className="error">
            Please enter a valid email address This field is required
          </span>
        </label>

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
              />
              <div className="absolute inset-0 peer-checked:bg-green-200 pointer-events-none"></div>
              <span className="z-10 w-6 aspect-square rounded-full outline outline-gray-500 peer-checked:outline-none peer-checked:bg-[url(/icon-radio-selected.svg)] bg-cover bg-no-repeat bg-center"></span>
              <span className="z-10 grow">Support Request</span>
            </label>
          </div>

          <span className="error">Please select a query type</span>
        </fieldset>

        {/* Message */}
        <label className="field field--full">
          <p className="afterAsterisk">Message</p>
          <textarea name="" id="" rows={4} className=""></textarea>
          <span className="error">This field is required</span>
        </label>

        {/* Consent checkbox */}
        <label className="field field--full field--horizontal flex-wrap mt-4">
          <input type="checkbox" name="" id="" className="peer sr-only " />
          <span className="w-6 aspect-square outline outline-green-600 rounded-sm peer-checked:bg-[url(/icon-checkbox-check.svg)] bg-cover bg-no-repeat"></span>
          <p className="ml-4 afterAsterisk">
            I consent to being contacted by the team
          </p>
          <span className="error basis-full">
            To submit this form, please consent to being contacted
          </span>
        </label>

        <button
          onClick={() => toast()}
          className="btn btn--primary basis-full mt-8"
        >
          Submit
        </button>

        <Toast />
      </div>
    </section>
  );
}
