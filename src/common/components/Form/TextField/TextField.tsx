import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import "./index.scss";

type TextFieldProps = {
  name: string;
  type?: "text" | "password";
};

export const TextField: FC<TextFieldProps> = ({
  name,
  type = "text",
  ...otherProps
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => {
        return (
          <>
            <input type={type} {...field} />
            {errors[name]?.message && (
              <span>{errors[name]?.message?.toString()}</span>
            )}
          </>
        );
      }}
    />
  );
};
