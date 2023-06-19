import { notification } from "antd";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";

export const DeleteNotification = (item) => {
  notification.open({
    message: "Success delete " + item,
    description: "To add new " + item + ", click Add New " + item + " button",
    icon: (
      <SmileOutlined
        style={{
          color: "#108ee9",
        }}
      />
    ),
  });
};
export const LoginNotification = () => {
  notification.open({
    message: "Failed to login",
    description: "Phone or password is incorrect!",
    icon: (
      <FrownOutlined
        style={{
          color: "#ff0026",
        }}
      />
    ),
  });
};
export const EditNotification = (item, status) => {
  if (status === "success") {
    notification.open({
      message: "Success edit " + item,
      description: "To add new " + item + ", click Add New " + item + " button",
      icon: (
        <SmileOutlined
          style={{
            color: "#108ee9",
          }}
        />
      ),
    });
  } else {
    notification.open({
      message: "Failed edit " + item,
      description:
        "Error: Slug can't contain uppercase. Please check the field and try again!",
      icon: (
        <FrownOutlined
          style={{
            color: "#ff0026",
          }}
        />
      ),
    });
  }
};
export const CreateNotification = (item, status) => {
  if (status === "success") {
    notification.open({
      message: "Success create " + item,
      description:
        "To delete or edit " + item + ", click action button in the table",
      icon: (
        <SmileOutlined
          style={{
            color: "#108ee9",
          }}
        />
      ),
    });
  } else {
    notification.open({
      message: "Failed create " + item,
      description:
        "Error: Slug can't contain uppercase. Please check the field and try again!",
      icon: (
        <FrownOutlined
          style={{
            color: "#ff0026",
          }}
        />
      ),
    });
  }
};
