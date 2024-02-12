import React from "react";
/**
 *
 * @param {{
 * type:"text" | "number";
 * label: string;
 * }} props Props for the component
 *
 */

export default function Select({ children, label, ...rest }) {
  return (
    <div className="flex flex-col gap-2">
      {label ? <label>{label}</label> : null}
      <select
        className="py-2 px-3 focus-visible:outline-none rounded"
        {...rest}
      >
        {children}
      </select>
    </div>
  );
}
