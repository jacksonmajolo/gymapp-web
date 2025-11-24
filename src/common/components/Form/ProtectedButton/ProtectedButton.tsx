import { type FC } from "react";
import { Button, type ButtonProps } from "@common/components/Form/Button/Button";
import "./index.scss";
import { useAuth } from "@admin/contexts/AuthContext";
import { useUserCan } from "@common/hooks/UserCan";

export type ProtectedButtonProps = {permission?: string} & ButtonProps;

export const ProtectedButton: FC<ProtectedButtonProps> = ({
  permission,
  ...ButtonProps
}) => {
  const { user } = useAuth();
  
  if (!user) {
    return <></>;
  }
  
  if (permission) {
    const containPermission = useUserCan(user, permission);
    if (!containPermission) {
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
