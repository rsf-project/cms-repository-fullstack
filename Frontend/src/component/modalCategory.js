import { Modal, Button, Form, Input } from "antd";
import { useEffect } from "react";
import {
  GetDetailCategory,
  UpdateCategory,
  CreateCategory,
} from "../controller/category";

export const ModalEditCategory = ({
  open,
  setOpen,
  id,
  setRefresh,
  refresh,
  cookie,
}) => {
  const HandleSubmit = async (values) => {
    const payload = {
      title: values.title,
      slug: values.slug,
    };
    UpdateCategory(cookie, id, payload, form, setRefresh, refresh);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [form] = Form.useForm();
  useEffect(() => {
    if (open) {
      GetDetailCategory(cookie, id, form);
    }
  }, [open]);
  return (
    <>
      <Modal
        title="Edit Category"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        style={{ textAlign: "center" }}
        width={400}
        footer={null}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 300,
            textAlign: "left",
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={HandleSubmit}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input your title!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Slug"
            name="slug"
            rules={[
              {
                required: true,
                message: "Please input your slug of the title!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => {
                Object.values(form.getFieldsValue()).includes(undefined) ||
                Object.values(form.getFieldsValue()).includes("")
                  ? setOpen(true)
                  : setOpen(false);
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export const ModalAddCategory = ({
  open,
  setOpen,
  setRefresh,
  refresh,
  cookie,
}) => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const HandleSubmit = async (values) => {
    const payload = {
      title: values.title,
      slug: values.slug,
    };
    CreateCategory(cookie, payload, form, setRefresh, refresh);
  };
  const [form] = Form.useForm();
  return (
    <>
      <Modal
        title="Insert New Category"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={400}
        style={{ textAlign: "center" }}
        footer={null}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            width: 300,
            textAlign: "left",
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={HandleSubmit}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input your title!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Slug"
            name="slug"
            rules={[
              {
                required: true,
                message: "Please input your slug of the title!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => {
                Object.values(form.getFieldsValue()).includes(undefined) ||
                Object.values(form.getFieldsValue()).includes("")
                  ? setOpen(true)
                  : setOpen(false);
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
