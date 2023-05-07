
import "./category.css"

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Modal, Input} from 'antd';
import { useHistory } from 'react-router-dom';

export const Category = () => {
    useEffect(() => {
        window.onpageshow = (event) => {
          if (event.persisted) {
            window.location.reload();
          }
        };
        return () => {
          window.onpageshow = null;
        };
      }, []);
    const [cate, setCate] = useState([]);
    const [refesh, setRefesh] = useState(false);
    const getCate = async () => {
        const res = await axios({
            url: 'http://localhost:8080/categories',
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        if(res?.status === 200) {
            setCate(res?.data?.data)
        }
    }

    useEffect(() => {
        getCate()
    },[refesh])

    return(
        <div className="wrapper">
            <div className="title">
                <h1>Category</h1>
            </div>
            <div className="list">
                <AddCategory {...{
                    setRefesh
                }}/>
                {cate?.map((c) => {
                    return <CategoryItem key = {c.id} {...{c, setRefesh: () => setRefesh(!refesh)}}/>
                })}
            </div>
        </div>
    )
}

const AddCategory = ({setRefesh}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cateName, setCateName] = useState("")

    const handleOk = async () => {
        const res = await axios({
            url: `http://localhost:8080/categories`,
            method: 'POST',
            data: {
                cateName
            },
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        if(res?.status === 200) {
            setIsModalOpen(false);
            setRefesh();
        }
      };

      const handleCancel = () => {
        setIsModalOpen(false);
      };
      const handleChange = (e) => {
        setCateName(e.target.value)
      }

      const showModal = () => {
      setIsModalOpen(true);
    };

    return(
        <div {...{
            className: "mb-[24px] flex justify-end"
        }}>
            <Button {...{
                onClick: showModal
            }}>
                add
            </Button>
            <Modal {...{
                title: "Create Category",
                open: isModalOpen,
                onOk: handleOk,
                onCancel: handleCancel,
            }}>
                <Input {...{
                    placeholder: "Category's name",
                    defaultValue: "",
                    onChange: handleChange,
                    value: cateName,
            }}/>
            </Modal>
        </div>
    )
}

const CategoryItem = ({c, setRefesh}) => {
    const history = useHistory();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cateName, setCateName] = useState(c?.cateName)

    const handleOk = async () => {
        const res = await axios({
            url: `http://localhost:8080/categories/${c?.id}`,
            method: 'PUT',
            data: {
                cateName
            },
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        if(res?.status === 200) {
            setIsModalOpen(false);
            setRefesh();
        }
      };

      const handleCancel = () => {
        setIsModalOpen(false);
      };
      const handleChange = (e) => {
        setCateName(e.target.value)
      }

      const showModal = (id) => {
      setIsModalOpen(true);
    };

    return(
        <div {...{
            className:"cate-item",
            onClick: ()=> {
                history.push(`/exercise?categoryId=${c.id}`)
                window.location.reload();
            }
        }} >
            <div>
                <p>{c?.cateName}</p>
            </div>
            <div className="edit" onClick={() => showModal(c?.id)}>
                Edit
            </div>
            <Modal {...{
                title: "Category Detail",
                open: isModalOpen,
                onOk: handleOk,
                onCancel: handleCancel,
            }}>
                <Input {...{
                    placeholder: "Category's name",
                    defaultValue: c?.cateName,
                    onChange: handleChange,
                    value: cateName
            }}/>
            </Modal>
        </div>
    )
}