import { ConfigProvider } from "antd"
import { FC, PropsWithChildren } from "react"
import ko_KR from 'antd/locale/ko_KR';
import 'dayjs/locale/ko';
import dayjs from 'dayjs'
dayjs.locale('ko');

const AntDConfigProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ConfigProvider locale={ko_KR}>
            {children}
        </ConfigProvider>
    )
}

export default AntDConfigProvider