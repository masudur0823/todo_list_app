/**
 *
 * @param {{
 * color: any;
 * fontSize:any;
 * }} props Props for the component
 *
 */

export default function FilterIcon({ color, fontSize }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      height={fontSize ? fontSize : "24"}
      width={fontSize ? fontSize : "24"}
      fill={color ? color : "#000"}
    >
      <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
    </svg>
  );
}
