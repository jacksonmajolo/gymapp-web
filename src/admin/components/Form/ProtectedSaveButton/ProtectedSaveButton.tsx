import { type FC } from "react";
import { ProtectedButton } from "@common/components/Form/ProtectedButton/ProtectedButton";
import "./index.scss";

type ProtectedSaveButtonProps = {
  role?: string;
}

export const ProtectedSaveButton: FC<ProtectedSaveButtonProps> = ({
  role,
}) => {
    return (
    <>
      <ProtectedButton role={role}>
        Save
      </ProtectedButton>
    </>
  );
};
