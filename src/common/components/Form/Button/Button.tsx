import { type FC, type ReactNode } from "react";
import "./index.scss";

export type ButtonProps = {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
}) => {
  return (
    <>
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
