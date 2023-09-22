import { Button, Form, Input, Card } from 'antd';

export function Login({ setUser }) {
  const onFinish = (values) => {
    const user = values
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }
  
  return (
    <div style={{ height: "67vh" }}>
      <Card
        title="Inicio de sesion"
        bordered={false}
        style={{ width: 400, margin: "auto" }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 300,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Por favor ingresar su nombre de usuario!",
              },
            ]}
          >
            <Input autoComplete="username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Por favor ingresar su clave!",
              },
            ]}
          >
            <Input.Password autoComplete="current-password" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Ingresar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
