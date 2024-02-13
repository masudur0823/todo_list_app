import React from "react";
import { twMerge } from "tailwind-merge";
/**
 *
 * @param {{
 * label: string;
 * }} props Props for the component
 *
 */

export default function Select({ children, label, className, ...rest }) {
  return (
    <div className="flex flex-col gap-2">
      {label ? <label>{label}</label> : null}
      <select
        className={twMerge(
          "py-2 px-3 focus-visible:outline-none rounded",
          className
        )}
        {...rest}
      >
        {children}
      </select>
    </div>
  );
}
