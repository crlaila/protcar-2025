import type React from "react";

interface CircleIconProps extends React.SVGProps<SVGSVGElement> {}

function CircleIcon(props: CircleIconProps) {
  return (
    <svg
      width={103}
      height={182}
      viewBox="0 0 103 182"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Circle Icon</title>
      <path
        d="M51.5 89.349c23.366 0 42.151 18.733 42.151 41.651 0 22.918-18.785 41.651-42.151 41.651-23.366 0-42.151-18.733-42.151-41.651 0-22.918 18.785-41.651 42.151-41.651z"
        stroke="#17191C"
        strokeWidth={18.6976}
      />
      <circle cx={47} cy={36} r={33.5} stroke="#FED200" strokeWidth={5} />
    </svg>
  );
}

export default CircleIcon;
