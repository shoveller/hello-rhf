import { ErrorMessage } from "@hookform/error-message"
import { Controller, FieldPath, FieldValues } from "react-hook-form"
import {  Input  } from 'antd';

type RHInputType<FormType extends FieldValues> = {
    name: FieldPath<FormType>
    placeholder?: string
}

function RHInput<FormType extends FieldValues>({ name, placeholder }: RHInputType<FormType>) {
  return (
    <>
      <Controller
          name={name}
          render={({ field: { onChange, onBlur, value, ref, disabled }, formState: { errors } }) => {
            return (
              <>
                <Input placeholder={placeholder} allowClear onBlur={onBlur} disabled={disabled} value={value} ref={ref} onChange={onChange} />
                <ErrorMessage errors={errors} name={name as never} />
              </>
            );
          }}
        />
    </>
  )
}

export default RHInput