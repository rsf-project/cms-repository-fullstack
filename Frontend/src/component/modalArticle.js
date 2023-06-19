import { Modal, Button, Form, Input, Select, message } from "antd";
import { useEffect } from "react";
import {
  CreateArticle,
  GetDetailArticle,
  UpdateArticle,
} from "../controller/article";

export const ModalEditArticle = ({
  open,
  setOpen,
  id,
  setRefresh,
  refresh,
  cookie,
  categories,
  selectedCategory,
}) => {
  let category = selectedCategory;
  const handleChange = (value) => {
    category = value;
  };
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const HandleSubmit = async (values) => {
    UpdateArticle(cookie, id, category, form, setRefresh, refresh);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    if (open) {
      //   category.map((key) => {
      //     console.log(key.title);
      //   });
      GetDetailArticle(cookie, id, form);
    }
  }, [open]);
  return (
    <>
      <Modal
        title="Edit Article"
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
            label="HTML"
            name="htmlcontent"
            rules={[
              {
                required: true,
                message: "Please input your html content!",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[
              {
                required: true,
                message: "Please input your category!",
              },
            ]}
          >
            <Select
              defaultValue={selectedCategory.title}
              style={{
                width: "100%",
              }}
              onChange={handleChange}
              options={categories.map((key) => ({
                label: key.title,
                value: key.id,
              }))}
            />
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

export const ModalAddArticle = ({
  open,
  setOpen,
  setRefresh,
  refresh,
  cookie,
  categories,
}) => {
  let category = categories[0].title;
  const handleChange = (value) => {
    category = value;
  };
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const HandleSubmit = async (values) => {
    CreateArticle(cookie, category, form, setRefresh, refresh);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Modal
        title="Edit Article"
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
            label="HTML"
            name="htmlcontent"
            rules={[
              {
                required: true,
                message: "Please input your html content!",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
            rules={[
              {
                required: true,
                message: "Please input your category!",
              },
            ]}
          >
            <Select
              style={{
                width: "100%",
              }}
              onChange={handleChange}
              options={categories.map((key) => ({
                label: key.title,
                value: key.id,
              }))}
            />
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
