import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

export function Loading() {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
    />
  )
  
  return (
    <Spin indicator={antIcon} />
  )
}