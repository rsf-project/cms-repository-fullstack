import { Divider, Table, Button, Popconfirm } from "antd";
import Dashboard from "../Layout";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { DeleteOutlined, EditTwoTone } from "@ant-design/icons";
import { GetArticle, DeleteArticle } from "../../controller/article";
import { GetCategory } from "../../controller/category";
import {
  ModalEditArticle,
  ModalAddArticle,
} from "../../component/modalArticle";
import { DeleteNotification } from "../../utils/Notification";

const Get_Article = (cookie, setData, refresh) => {
  useEffect(() => {
    GetArticle(cookie, setData);
  }, [refresh]);
};
// const Get_Category = (cookie, setData, refresh) => {
//   useEffect(() => {
//     GetCategory(cookie, setData);
//   }, [refresh]);
// };

const TableArticle = () => {
  const [refresh, setRefresh] = useState(true);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalInsert, setModalInsert] = useState(false);
  const [id, setId] = useState();
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Slug",
      dataIndex: "slug",
    },
    {
      title: "HTML Content",
      dataIndex: "htmlcontent",
    },
    {
      title: "Category",
      dataIndex: "titlecategory",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record, index) => (
        <>
          <Popconfirm
            title="Delete the Article"
            description="Are you sure to delete this article?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => {
              DeleteArticle(cookie, record.id);
              DeleteNotification("Article");
              setRefresh(!refresh);
            }}
          >
            <a>
              <DeleteOutlined style={{ fontSize: "20px", color: "#ff0026" }} />
            </a>
          </Popconfirm>
          <a
            onClick={() => {
              setId(record.id);
              setSelectedCategory(record.category.id);
              setModalEdit(true);
              setOpenEdit(true);
            }}
            onMouseEnter={() => {
              GetCategory(cookie, setCategory, refresh);
            }}
          >
            <EditTwoTone style={{ fontSize: "20px" }} />
          </a>
        </>
      ),
    },
  ];
  const [cookie] = useCookies();
  const [data, setData] = useState();
  const [openEdit, setOpenEdit] = useState(false);
  const [openInsert, setOpenInsert] = useState(false);
  const [category, setCategory] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  Get_Article(cookie, setData, refresh);
  // Get_Category(cookie, setCategory, refresh);
  document.title = "Article";
  return (
    <>
      <Dashboard
        content={
          <div>
            {openEdit ? (
              <ModalEditArticle
                open={modalEdit}
                setOpen={setModalEdit}
                id={id}
                setRefresh={setRefresh}
                refresh={refresh}
                cookie={cookie}
                categories={category}
                selectedCategory={selectedCategory}
              ></ModalEditArticle>
            ) : null}
            {openInsert ? (
              <ModalAddArticle
                open={modalInsert}
                setOpen={setModalInsert}
                setRefresh={setRefresh}
                refresh={refresh}
                cookie={cookie}
                categories={category}
              ></ModalAddArticle>
            ) : null}
            <Divider>List Article</Divider>
            <Button
              type="primary"
              size={"large"}
              onMouseEnter={() => {
                GetCategory(cookie, setCategory, refresh);
              }}
              onClick={() => {
                setModalInsert(true);
                setOpenInsert(true);
              }}
            >
              Add New Article
            </Button>
            <Table
              rowKey={"id"}
              columns={columns}
              dataSource={data}
              size="middle"
            />
          </div>
        }
      />
    </>
  );
};

export default TableArticle;
