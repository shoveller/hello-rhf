import { FocusEventHandler } from 'react';
import { ConfigProvider } from 'antd';
import ko_KR from 'antd/locale/ko_KR';
import { DatePicker } from "antd";
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/ko';
dayjs.locale('ko');

type DateRangePickerProps = {
    onBlur?: FocusEventHandler
    onChange?: (dates: [Dayjs | null, Dayjs | null] | null, dateStrings: [string, string]) => void;
    value?: [Dayjs | null, Dayjs | null];
    disabled?: boolean
}

function DateRangePicker({ onBlur, onChange, value, disabled = false }: DateRangePickerProps){    
    return (
        <ConfigProvider locale={ko_KR}>
            <DatePicker.RangePicker 
                format="YYYY-MM-DD" 
                popupStyle={{ width: '660px' }} 
                onBlur={onBlur} 
                onChange={onChange} 
                showTime
                value={value}
                disabled={disabled}
                needConfirm
            />
            <style>{` 
                .ant-picker-time-panel{ display: none !important; } 
                .ant-picker-footer .ant-btn-primary {
                    background-color: red;
                    border-color: red;
                    }
            `}</style>
        </ConfigProvider>
    )
}

export default DateRangePicker