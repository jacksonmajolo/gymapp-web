import { type FC, type ReactNode } from "react";
import "./index.scss";

type LabelProps = {
  children: ReactNode;
  htmlFor?: string | undefined;
  required?: boolean;
};

export const Label: FC<LabelProps> = ({
  children,
  htmlFor = undefined,
  required = false,
}) => {
  return (
    <>
      <label htmlFor={htmlFor}>
        {children}
        {required && <span>*</span>}
      </label>
    </>
  );
};
