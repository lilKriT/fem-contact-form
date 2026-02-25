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
          First Name
          <input type="text" name="" id="" />
          <span className="error">This field is required</span>
        </label>

        <label className="field field--half">
          Last Name
          <input type="text" />
          <span className="error">This field is required</span>
        </label>

        <label className="field field--full">
          Email Address
          <input type="text" />
          <span className="error">
            Please enter a valid email address This field is required
          </span>
        </label>

        <p>
          Query Type General Enquiry Support Request Please select a query type
        </p>

        {/* Message */}
        <label className="field field--full">
          <p>Message</p>
          <textarea name="" id="" rows={4} className=""></textarea>
          <span className="error">This field is required</span>
        </label>

        {/* Consent checkbox */}
        <label className="field field--full field--horizontal flex-wrap">
          <input type="checkbox" name="" id="" className="basis-8 shrink-0" />
          <p className="">I consent to being contacted by the team</p>
          <span className="error basis-full">
            To submit this form, please consent to being contacted
          </span>
        </label>

        <button
          // onClick={() => setShowToast(!showToast)}
          onClick={() => toast()}
          className="btn btn--primary basis-full"
        >
          Submit
        </button>

        <Toast />
      </div>
    </section>
  );
}
