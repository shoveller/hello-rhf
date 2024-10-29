import { ReactNode, useState } from 'react';
import { Modal, List, Select } from 'antd';
import { Controller, FieldPath, FieldValues } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

type RHModalSelectType<FormType extends FieldValues> = {
    name: FieldPath<FormType>
    placeholder?: string
    title?: string
    dataSource?: ReactNode[]
}

function RHModalSelect<FormType extends FieldValues>({ name, placeholder, title, dataSource }: RHModalSelectType<FormType>) {
    const [show, setShow] = useState(false);

    return (
        <Controller name={name} render={({ field: { onChange, onBlur, value, ref, disabled }, formState: { errors } }) => {
            return (
                <>
                    <Select
                        value={value}
                        onClick={() => setShow(true)}
                        style={{ width: 200 }}
                        open={false}
                        placeholder={placeholder}
                        disabled={disabled} 
                    />
                    <ErrorMessage errors={errors} name={name as never} />
                    <Modal
                        title={title}
                        open={show}
                        onOk={() => setShow(false)}
                        onCancel={() => setShow(false)}
                        width={600}
                    >
                        <List
                            style={{ height: 300, overflow: 'auto' }}
                            dataSource={dataSource}
                            renderItem={(item) => (
                                <List.Item
                                    onClick={() => onChange(item)}
                                    onBlur={onBlur}
                                    ref={ref}
                                    style={{
                                        cursor: 'pointer',
                                        backgroundColor: value === item ? '#f0f0f0' : 'transparent'
                                    }}
                                >
                                    {item}
                                </List.Item>
                            )} />
                    </Modal>
            </>
            )
        }} />
    );
}

export default RHModalSelect;