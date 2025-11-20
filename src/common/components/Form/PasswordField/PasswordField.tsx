import { FC, useState } from "react";
import TextField from "@common/components/TextField";
import Button from "@common/components/Button";
import "./index.scss";

type PasswordFieldProps = {
  name: string;
};

export const PasswordField: FC<PasswordFieldProps> = ({
  name,
  ...otherProps
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((value) => !value);
  };

  return (
    <>
      <TextField
        name={name}
        type={showPassword ? "text" : "password"}
        {...otherProps}
      />
      <Button onClick={togglePasswordVisibility}>
        {showPassword ? "🙈" : "🙉"}
      </Button>
    </>
  );
};
