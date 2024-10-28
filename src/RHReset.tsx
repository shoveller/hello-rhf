import { PropsWithChildren } from "react"
import { DefaultValues, FieldValues, useFormContext } from "react-hook-form"

type RHResetProps<FormType extends FieldValues> = {
    defaultValues?: DefaultValues<FormType>
}

function RHReset<FormType extends FieldValues>({ defaultValues, children }: PropsWithChildren<RHResetProps<FormType>>)  {
  const { reset } = useFormContext<FormType>()

  return <button type="reset" onClick={() => reset(defaultValues)}>{children}</button> 
}

export default RHReset