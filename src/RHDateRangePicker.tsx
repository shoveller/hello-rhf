import { DatePicker } from "antd";
import { Controller, FieldPath, FieldValues } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

type RHDateRangePickerType<FormType extends FieldValues> = {
    name: FieldPath<FormType>
    format?: string
}

function RHDateRangePicker<FormType extends FieldValues>({ format = "YYYY-MM-DD", name }: RHDateRangePickerType<FormType>){    
    return (
        <>
            <Controller name={name} render={({ field: { onChange, onBlur, value, ref, disabled }, formState: { errors } }) => {
                return (
                    <>
                        <DatePicker.RangePicker 
                            format={format} 
                            popupStyle={{ width: '660px' }} 
                            onBlur={onBlur} 
                            onChange={(values) => {
                                return onChange(values);
                            }} 
                            showTime
                            value={value}
                            disabled={disabled}
                            needConfirm
                            ref={ref}
                        />
                        <ErrorMessage errors={errors} name={name as never} />
                    </>
                )
            }} />
            <style>{` 
                .ant-picker-time-panel{ display: none !important; } 
                .ant-picker-footer .ant-btn-primary {
                    background-color: red;
                    border-color: red;
                    }
            `}</style>
        </>
    )
}

export default RHDateRangePicker