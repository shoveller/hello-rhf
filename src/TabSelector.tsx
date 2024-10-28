import { Tabs } from "antd";
import { ComponentProps, FC } from "react";

const TabSelector: FC<ComponentProps<typeof Tabs>> = ({ onChange, items, defaultActiveKey }) => {
    return <Tabs defaultActiveKey={defaultActiveKey} items={items} onChange={onChange} />
}

export default TabSelector