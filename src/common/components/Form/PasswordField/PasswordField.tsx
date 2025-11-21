import { type FC, useState } from "react";
import TextField from "@common/components/Form/TextField";
import Button from "@common/components/Form/Button";
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
