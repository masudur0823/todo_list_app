/**
 *
 * @param {{
 * color: any;
 * fontSize:any;
 * }} props Props for the component
 *
 */

export default function CheckIcon({ color, fontSize }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      height={fontSize ? fontSize : "24"}
      width={fontSize ? fontSize : "24"}
      fill={color ? color : "#000"}
    >
      <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
    </svg>
  );
}
