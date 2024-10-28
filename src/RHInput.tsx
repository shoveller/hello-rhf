import { ErrorMessage } from "@hookform/error-message"
import { Controller, FieldPath, FieldValues, useFormContext } from "react-hook-form"
import {  Input  } from 'antd';

type RHInputType<FormType extends FieldValues> = {
    name: FieldPath<FormType>
    placeholder?: string
}

function RHInput<FormType extends FieldValues>({ name, placeholder }: RHInputType<FormType>) {
  const { control, formState: { errors } } = useFormContext<FormType>()  

  return (
  <>
    <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Input placeholder={placeholder} allowClear onBlur={onBlur} value={value} ref={ref} onChange={onChange} />
        )}
      />
    <ErrorMessage errors={errors} name={name as never} />
  </>)
}

export default RHInput