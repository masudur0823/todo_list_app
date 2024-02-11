import React from "react";

export default function Layout({ children }) {
  return (
    <div className="w-full md:w-[700px]  m-auto mt-10 ">
      <div className="mx-2 md:border p-2 md:p-4 flex flex-col gap-5">
        {children}
      </div>
    </div>
  );
}
