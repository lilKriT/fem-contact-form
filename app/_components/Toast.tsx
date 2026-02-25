import { subscribe } from "@/lib/toast";
import { useEffect, useState } from "react";

const Toast = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setIsOpen(true);

      setTimeout(() => setIsOpen(false), 3000);
    });

    return unsubscribe;
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className={`${isOpen && "animate-toast"} absolute top-16 left-1/2 -translate-x-1/2 text-white bg-emerald-900 flex flex-col gap-2 p-6 rounded-2xl w-fit`}
    >
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          fill="none"
          viewBox="0 0 20 21"
          className="fill-current text-white"
        >
          <path d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z" />
        </svg>
        <h2 className="text-lg font-bold">Message Sent!</h2>
      </div>
      <p className="">Thanks for completing the form.</p>
    </div>
  );
};

export default Toast;
