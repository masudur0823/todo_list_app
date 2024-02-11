import { twMerge } from "tailwind-merge";
/**
 *
 * @param {{
 * variant: "primary" | "secondary";
 * }} props Props for the component
 *
 */

export default function Button({ children, variant, className, ...rest }) {
  const style = {
    primary: " bg-x-violet text-white",
    secondary: " bg-white text-x-violet",
  };
  return (
    <button
      className={twMerge(
        `text-sm md:text-base border border-x-violet px-3 md:px-5 py-1 md:py-2 rounded-sm capitalize flex items-center gap-2 ${
          variant ? style[variant] : style.primary
        } `,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
