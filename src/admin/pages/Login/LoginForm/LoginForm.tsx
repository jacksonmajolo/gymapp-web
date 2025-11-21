import { z } from "zod";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@common/components/Form/Button";
import Label from "@common/components/Form/Label";
import TextField from "@common/components/Form/TextField";
import PasswordField from "@common/components/Form/PasswordField";
import "./index.scss";

const LoginSchema = z.object({
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

export const LoginForm = () => {
  const methods = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "admin@teste.com",
      password: "admin@teste",
    },
  });

  const onSubmitHandler: SubmitHandler<LoginSchemaType> = async (data) => {
    console.log("Login data submitted:", data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
          <div>
            <Label required htmlFor="email">
              Email
            </Label>
            <TextField name="email" />
          </div>
          <div>
            <Label required htmlFor="password">
              Password
            </Label>
            <PasswordField name="password" />
          </div>
          <div>
            <Button type="submit">Login</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};