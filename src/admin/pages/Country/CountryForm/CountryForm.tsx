import { type FC, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import TextField from "@common/components/Form/TextField";
import Label from "@common/components/Form/Label";
import Button from "@common/components/Form/Button";
import "./index.scss";
import { useServices } from "@/admin/contexts/ServiceContext";

const CountrySchema = z.object({
  name: z.string().min(1, "name is required").max(255, "max size name"),
  code: z.string().min(1, "code is required").max(2, "max size code"),
  active: z.boolean(),
});

type CountrySchemaType = z.infer<typeof CountrySchema>;

interface CountryFormProps {
  id?: number;
}

export const CountryForm: FC<CountryFormProps> = ({ id }) => {
  const navigate = useNavigate();

  const { countryService } = useServices();

  const methods = useForm<CountrySchemaType>({
    resolver: zodResolver(CountrySchema),
    defaultValues: {
      active: true,
    },
  });

  useEffect(() => {
    if (id) {
      countryService.find(id).then((country) => methods.reset(country));
    }
  }, [id]);

  const onSubmitHandler: SubmitHandler<CountrySchemaType> = async (data) => {
    if (id) {
      countryService.update(id, data).then(() => alert("updated"));
    } else {
      countryService.create(data).then(() => alert("created"));
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
            <Button type="submit">Save</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
