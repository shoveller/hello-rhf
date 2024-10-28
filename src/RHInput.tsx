import { ErrorMessage } from "@hookform/error-message"
import { FieldPath, FieldValues, useFormContext } from "react-hook-form"

type RHInputType<FormType extends FieldValues> = {
    name: FieldPath<FormType>
}

function RHInput<FormType extends FieldValues>({ name }: RHInputType<FormType>) {
  const { register, formState: { errors } } = useFormContext<FormType>()  

  return (
  <>
    <input {...register(name)} />      
    <ErrorMessage errors={errors} name={name as never} />
  </>)
}

export default RHInput