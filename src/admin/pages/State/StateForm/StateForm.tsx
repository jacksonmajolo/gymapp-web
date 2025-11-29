import { type FC, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import TextField from "@common/components/Form/TextField";
import Label from "@common/components/Form/Label";
import "./index.scss";
import { useServices } from "@admin/contexts/ServiceContext";
import { ProtectedSaveButton } from "@admin/components/Form/ProtectedSaveButton/ProtectedSaveButton";

const StateSchema = z.object({
  name: z.string().min(1, "name is required").max(255, "max size name"),
  code: z.string().min(1, "code is required").max(2, "max size code"),
  active: z.boolean(),
});

type StateSchemaType = z.infer<typeof StateSchema>;

type StateFormProps = {
  id?: number;
}

export const StateForm: FC<StateFormProps> = ({ id }) => {
  const navigate = useNavigate();

  const { stateService } = useServices();

  const methods = useForm<StateSchemaType>({
    resolver: zodResolver(StateSchema),
    defaultValues: {
      active: true,
    },
  });

  useEffect(() => {
    if (id) {
      stateService.find(id).then((state) => methods.reset(state));
    }
  }, [id]);

  const onSubmitHandler: SubmitHandler<StateSchemaType> = async (data) => {
    if (id) {
      stateService.update(id, data).then(() => alert("updated"));
    } else {
      stateService.create(data).then(() => alert("created"));
    }

    navigate(-1);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
          <div>
            <Label required htmlFor="code">
              Code
            </Label>
            <TextField name="code" />
          </div>
          <div>
            <Label required htmlFor="name">
              Name
            </Label>
            <TextField name="name" />
          </div>
          <div>
            <ProtectedSaveButton role={id ? "states.update" : "states.create"}/>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
