import { useEffect } from "react";
import { Form, Input, Button } from "antd";

function onFormSubmit(values) {
  console.log(values);
}

function onFormError(errors) {
  console.error(errors);
}

export default function LoginForm() {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldValue("username", "admin");
  }, []);

  return (
    <Form
      form={form}
      labelCol={{
        span: 12,
      }}
      wrapperCol={{
        span: 12,
      }}
      onFinish={onFormSubmit}
      onFinishFailed={onFormError}
    >
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[
          {
            required: true,
            message: "Имя пользователя обязательно",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          {
            required: true,
            message: "Пароль обязателен",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
}
