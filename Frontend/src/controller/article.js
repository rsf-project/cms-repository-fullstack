import axios from "axios";
import { EditNotification, CreateNotification } from "../utils/Notification";

export const GetArticle = async (cookie, setData) => {
  await axios({
    method: "get",
    url: "http://127.0.0.1:8800/admin/v1/articles?limit=10&offset=0",
    headers: { token: cookie.token },
  })
    .then((response) => {
      setData(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const DeleteArticle = async (cookie, id) => {
  await axios({
    method: "delete",
    url: "http://127.0.0.1:8800/admin/v1/article?id=" + id,
    headers: { token: cookie.token },
  })
    .then((response) => {
      console.log(response.data.message);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const UpdateArticle = async (
  cookie,
  id,
  selectedCategory,
  form,
  setRefresh,
  refresh
) => {
  const payload = {
    id: id,
    title: form.getFieldValue("title"),
    slug: form.getFieldValue("slug"),
    htmlcontent: form.getFieldValue("htmlcontent"),
    categoryid: selectedCategory,
  };
  await axios({
    method: "patch",
    url: "http://127.0.0.1:8800/admin/v1/article",
    data: payload,
    headers: { token: cookie.token, "Content-Type": "multipart/form-data" },
  })
    .then((response) => {
      EditNotification("Article", "success");
      form.resetFields();
      setRefresh(!refresh);
    })
    .catch((error) => {
      EditNotification("Article", "failed");
    });
};
export const GetDetailArticle = async (cookie, id, form) => {
  await axios({
    method: "get",
    url: "http://127.0.0.1:8800/admin/v1/article?id=" + id,
    headers: { token: cookie.token },
  })
    .then((response) => {
      form.setFieldsValue({
        title: response.data.data[0].title,
        slug: response.data.data[0].slug,
        htmlcontent: response.data.data[0].htmlcontent,
        category: response.data.data[0].titlecategory,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
export const CreateArticle = async (
  cookie,
  category,
  form,
  setRefresh,
  refresh
) => {
  const payload = {
    title: form.getFieldValue("title"),
    slug: form.getFieldValue("slug"),
    htmlcontent: form.getFieldValue("htmlcontent"),
    categoryid: category,
  };
  await axios({
    method: "post",
    url: "http://127.0.0.1:8800/admin/v1/article",
    data: payload,
    headers: { token: cookie.token, "Content-Type": "multipart/form-data" },
  })
    .then((response) => {
      CreateNotification("Article", "success");
      form.resetFields();
      setRefresh(!refresh);
    })
    .catch((error) => {
      CreateNotification("Article", "failed");
    });
};
