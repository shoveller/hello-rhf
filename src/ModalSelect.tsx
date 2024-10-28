import { ReactNode, useState } from 'react';
import { Modal, List, Select } from 'antd';
import { Controller, FieldPath, FieldValues, useFormContext } from 'react-hook-form';

type ModalSelectType<FormType extends FieldValues> = {
    name: FieldPath<FormType>
    placeholder?: string
    title?: string
    dataSource?: ReactNode[]
}

function ModalSelect<FormType extends FieldValues>({ name, placeholder, title, dataSource }: ModalSelectType<FormType>) {
    const { control } = useFormContext<FormType>();
    const [show, setShow] = useState(false);

    return (
        <Controller control={control} name={name} render={({ field: { onChange, onBlur, value, ref } }) => {
            return (
                <>
                    <Select
                        value={value}
                        onClick={() => setShow(true)}
                        style={{ width: 200 }}
                        open={false}
                        placeholder={placeholder} 
                    />
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

export default ModalSelect;