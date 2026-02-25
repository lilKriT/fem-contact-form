"use client";

import { useState } from "react";
import Toast from "./_components/Toast";
import { toast } from "@/lib/toast";

export default function Home() {
  const [showToast, setShowToast] = useState(false);

  return (
    <section className="min-h-dvh flex justify-center items-center">
      <div className="max-w-4xl bg-white flex flex-wrap gap-y-4 gap-x-4 px-12 py-10 rounded-3xl mx-8 my-32">
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

          <div className="flex gap-4 mt-4">
            <div className="basis-1/2 p-4 flex gap-4 border border-green-600 rounded-2xl">
              <input type="radio" name="queryType" id="general" />
              <label htmlFor="general" className="grow cursor-pointer">
                General Enquiry
              </label>
            </div>

            <div className="basis-1/2 p-4 flex gap-4 border border-green-600 rounded-2xl">
              <input type="radio" name="queryType" id="support" />
              <label htmlFor="support" className="grow cursor-pointer">
                Support Request
              </label>
            </div>
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
        <label className="field field--full field--horizontal flex-wrap">
          <input type="checkbox" name="" id="" className="basis-8 shrink-0" />
          <p className="ml-4 afterAsterisk">
            I consent to being contacted by the team
          </p>
          <span className="error basis-full">
            To submit this form, please consent to being contacted
          </span>
        </label>

        <button onClick={() => toast()} className="btn btn--primary basis-full">
          Submit
        </button>

        <Toast />
      </div>
    </section>
  );
}
