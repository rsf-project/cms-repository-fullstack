import axios from "axios";
import { EditNotification, CreateNotification } from "../utils/Notification";

export const GetCategory = async (cookie, setData) => {
  await axios({
    method: "get",
    url: "http://127.0.0.1:8800/admin/v1/categories",
    headers: { token: cookie.token },
  })
    .then((response) => {
      setData(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const DeleteCategory = async (cookie, id) => {
  await axios({
    method: "delete",
    url: "http://127.0.0.1:8800/admin/v1/category?id=" + id,
    headers: { token: cookie.token },
  })
    .then((response) => {
      console.log(response.data.message);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const GetDetailCategory = async (cookie, id, form) => {
  await axios({
    method: "get",
    url: "http://127.0.0.1:8800/admin/v1/category?id=" + id,
    headers: { token: cookie.token },
  })
    .then((response) => {
      form.setFieldsValue({
        title: response.data.data[0].title,
        slug: response.data.data[0].slug,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
export const UpdateCategory = async (
  cookie,
  id,
  payload,
  form,
  setRefresh,
  refresh
) => {
  await axios({
    method: "patch",
    url:
      "http://127.0.0.1:8800/admin/v1/category?id=" +
      id +
      "&title=" +
      payload.title +
      "&slug=" +
      payload.slug,
    headers: { token: cookie.token },
  })
    .then((response) => {
      EditNotification("Category", "success");
      form.resetFields();
      setRefresh(!refresh);
    })
    .catch((error) => {
      EditNotification("Category", "failed");
    });
};
export const CreateCategory = async (
  cookie,
  payload,
  form,
  setRefresh,
  refresh
) => {
  await axios({
    method: "post",
    url: "http://127.0.0.1:8800/admin/v1/category",
    data: payload,
    headers: { token: cookie.token, "Content-Type": "multipart/form-data" },
  })
    .then((response) => {
      console.log(response);
      CreateNotification("Category", "success");
      form.resetFields();
      setRefresh(!refresh);
    })
    .catch((error) => {
      CreateNotification("Category", "failed");
    });
};
