import { Divider, Table, Button, Popconfirm } from "antd";
import Dashboard from "../Layout";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { DeleteOutlined, EditTwoTone } from "@ant-design/icons";
import { GetCategory, DeleteCategory } from "../../controller/category";
import {
  ModalEditCategory,
  ModalAddCategory,
} from "../../component/modalCategory";
import { DeleteNotification } from "../../utils/Notification";

const Get_Category = (cookie, setData, refresh) => {
  useEffect(() => {
    GetCategory(cookie, setData);
  }, [refresh]);
};

const TableCategory = () => {
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
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record, index) => (
        <>
          <Popconfirm
            title="Delete the category"
            description="Are you sure to delete this category?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => {
              DeleteCategory(cookie, record.id);
              DeleteNotification("Category");
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
              setModalEdit(true);
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
  Get_Category(cookie, setData, refresh);
  document.title = "Category";
  return (
    <>
      <Dashboard
        content={
          <div>
            <ModalEditCategory
              open={modalEdit}
              setOpen={setModalEdit}
              id={id}
              setRefresh={setRefresh}
              refresh={refresh}
              cookie={cookie}
            ></ModalEditCategory>

            <ModalAddCategory
              open={modalInsert}
              setOpen={setModalInsert}
              setRefresh={setRefresh}
              refresh={refresh}
              cookie={cookie}
            ></ModalAddCategory>

            <Divider>List Category</Divider>
            <Button
              type="primary"
              size={"large"}
              onClick={() => {
                setModalInsert(true);
              }}
            >
              Add New Category
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

export default TableCategory;
