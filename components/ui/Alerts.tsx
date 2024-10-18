import React from "react";

interface SuccessAlertProps {
  message: string;
  isSuccess: boolean | null;
  onClose: () => void;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ message, isSuccess, onClose }) => {
  return (
    <div
      className={`${
        isSuccess ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
      } border ${isSuccess ? "border-green-400" : "border-red-400"} px-4 py-3 rounded relative`}
      role="alert"
    >
      <strong className="font-bold">
        {isSuccess ? "Success!" : "Error!"}
      </strong>
      <span className="block sm:inline ml-2">{message}</span>
      <button
        className="absolute top-0 bottom-0 right-0 px-4 py-3"
        onClick={onClose}
      >
        <svg
          className={`fill-current h-6 w-6 ${
            isSuccess ? "text-green-500" : "text-red-500"
          }`}
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 5.652a.5.5 0 00-.707 0L10 9.293 6.36 5.652a.5.5 0 00-.707.707L9.293 10l-3.64 3.64a.5.5 0 00.707.707L10 10.707l3.64 3.64a.5.5 0 00.707-.707L10.707 10l3.64-3.64a.5.5 0 000-.707z" />
        </svg>
      </button>
    </div>
  );
};

export default SuccessAlert;
