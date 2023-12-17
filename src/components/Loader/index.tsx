import React from "react";
import { Svg } from "./styles";

interface LoaderProps {
  color?: string;
  size?: number;
  className?: string;
  speed?: number;
}

export const Loader: React.FC<LoaderProps> = ({
  color = "#ffffff",
  size = 14,
  speed,
  className,
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      speed={speed}
      className={className ?? ""}
    >
      <path
        d="M13 7C13 5.81331 12.6481 4.65327 11.9888 3.66658C11.3295 2.67988 10.3925 1.91085 9.2961 1.45672C8.19974 1.0026 6.99334 0.883777 5.82946 1.11529C4.66557 1.3468 3.59647 1.91824 2.75736 2.75736C1.91824 3.59647 1.3468 4.66557 1.11529 5.82946C0.883777 6.99334 1.0026 8.19974 1.45672 9.2961C1.91085 10.3925 2.67988 11.3295 3.66658 11.9888C4.65327 12.6481 5.81331 13 7 13"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};
