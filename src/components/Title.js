import { twMerge } from "tailwind-merge";

/**
 *
 * @param {{
 * component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
 * variant:"primary" | "secondary";
 * }} props Props for the component
 *
 */

export default function Title({
  children,
  component,
  variant,
  className,
  ...rest
}) {
  const style = {
    primary: "text-3xl font-bold uppercase text-gray-700",
    secondary:
      "mb-4 text-3xl font-bold uppercase inline-block relative text-gray-700 after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:w-1/2 after:h-1 after:-translate-x-1/2 after:bg-x-violet ",
  };
  switch (component) {
    case "h1":
      return (
        <h1
          className={twMerge(variant ? style[variant] : "", className)}
          {...rest}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={twMerge(variant ? style[variant] : "", className)}
          {...rest}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={twMerge(variant ? style[variant] : "", className)}
          {...rest}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={twMerge(variant ? style[variant] : "", className)}
          {...rest}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={twMerge(variant ? style[variant] : "", className)}
          {...rest}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={twMerge(variant ? style[variant] : "", className)}
          {...rest}
        >
          {children}
        </h6>
      );
    default:
      return (
        <h1
          className={twMerge(variant ? style[variant] : "", className)}
          {...rest}
        >
          {children}
        </h1>
      );
  }
}
