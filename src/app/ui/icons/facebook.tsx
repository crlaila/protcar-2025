import type * as React from "react";
import type { JSX } from "react";

function FacebookIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>WhatsApp icon</title>
      <g clipPath="url(#clip0_104_555)">
        <path
          d="M16 0c8.837 0 16 7.163 16 16 0 8.18-6.14 14.926-14.062 15.883V20.889h4.329L23.165 16h-5.227v-1.73c0-1.291.254-2.185.835-2.757.582-.571 1.49-.82 2.803-.82.332 0 .637.004.908.01.395.01.716.026.94.05V6.32a4.89 4.89 0 00-.313-.075 18.82 18.82 0 00-3.165-.323c-2.423 0-4.254.518-5.532 1.592-1.542 1.296-2.28 3.4-2.28 6.378V16H8.836v4.89h3.3v10.639C5.165 29.799 0 23.504 0 16 0 7.163 7.163 0 16 0z"
          fill="#FED200"
        />
      </g>
      <defs>
        <clipPath id="clip0_104_555">
          <path fill="#fff" d="M0 0H32V32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default FacebookIcon;
