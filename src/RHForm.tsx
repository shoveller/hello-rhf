import { PropsWithChildren } from "react"
import { FieldValues, useForm, DefaultValues, SubmitHandler, SubmitErrorHandler, FormProvider } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { ZodObject } from 'zod'

type RHFormProps<FormType extends FieldValues> = {
    defaultValues: DefaultValues<FormType>,
    onSubmit: SubmitHandler<FormType>,
    onError: SubmitErrorHandler<FormType>,
    schema: ZodObject<FormType>
}

function RHForm<FormType extends FieldValues>({ children, defaultValues, onSubmit, onError, schema }: PropsWithChildren<RHFormProps<FormType>>) {
    const methods = useForm<FormType>({
        defaultValues,
        resolver: zodResolver(schema),
        mode: 'all'
    })

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit, onError)}>{children}</form>
        </FormProvider>
    )
}

export default RHForm