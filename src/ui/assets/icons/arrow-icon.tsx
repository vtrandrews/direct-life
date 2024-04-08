type Props = {
  position: "left" | "right" | "up" | "down";
};

export const ArrowIcon = (props: Props) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      transform={`rotate(${
        props.position === "left"
          ? 270
          : props.position === "up"
          ? 0
          : props.position === "down"
          ? 180
          : 90
      })`}
      style={{ transition: "transform 0.3s" }}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v13m0-13 4 4m-4-4-4 4"
      />
    </svg>
  );
};

export default ArrowIcon;
