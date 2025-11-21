import { type FC } from "react";
import { Button, type ButtonProps } from "@common/components/Form/Button/Button";
import "./index.scss";
import { useAuth } from "@admin/contexts/AuthContext";
import { useUserCan } from "@common/hooks/UserCan";

export type ProtectedButtonProps = {role?: string} & ButtonProps;

export const ProtectedButton: FC<ProtectedButtonProps> = ({
  role,
  ...ButtonProps
}) => {
  const { user } = useAuth();
  
  if (!user) {
    return <></>;
  }
  
  if (role) {
    const containRole = useUserCan(user, role);
    if (!containRole) {
      return <></>;
    }
  }

  return (
    <>
      <Button {...ButtonProps}>
        Save
      </Button>
    </>
  );
};
