
import "./question.css"

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Modal, Input} from 'antd';
import { useHistory } from 'react-router-dom';
import { Checkbox } from 'antd';

export const Question = () => {
    const [question, setQuestion] = useState([]);
    const [refesh, setRefesh] = useState(false);
    const getQuestion = async () => {
        const res = await axios({
            url: 'http://localhost:8080/questions',
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        if(res?.status === 200) {
            setQuestion(res?.data?.data)
        }
    }

    useEffect(() => {
        getQuestion()
    },[refesh])

    return(
        <div className="wrapper">
            <div className="title">
                <h1>question</h1>
            </div>
            <div className="list">
                <AddQuestion {...{
                    setRefesh
                }}/>
                {question?.map((q) => {
                    return <QuestionItem key = {q.id} {...{q, setRefesh: () => setRefesh(!refesh)}}/>
                })}
            </div>
        </div>
    )
}

const AddQuestion = ({setRefesh}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [description, setDescription] = useState("")
    const [options, setOptions] = useState([])

    const handleOk = async () => {
        const res = await axios({
            url: `http://localhost:8080/questions`,
            method: 'POST',
            data: {
                description,
                options
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
      const handleChangeDes = (e) => {
        setDescription(e.target.value)
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
                title: "Question",
                open: isModalOpen,
                onOk: handleOk,
                onCancel: handleCancel,
            }}>
                <Input {...{
                    placeholder: "Question",
                    defaultValue: "",
                    onChange: handleChangeDes,
                    value: description,
            }}/>
            {options?.map((o) => {
                return <div key = {o}>
                    <p>{o?.content}</p>
                </div>
            })}
            </Modal>
        </div>
    )
}

const QuestionItem = ({q, setRefesh}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [description, setDescription] = useState(q?.description)
    const [options, setOptions] = useState(q?.options ?? [])

    const handleOk = async () => {
        const res = await axios({
            url: `http://localhost:8080/questions/${q?.id}`,
            method: 'PUT',
            data: {
                description,
                options
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
      const handleChangeDes = (e) => {
        setDescription(e.target.value)
      }

      const showModal = (id) => {
      setIsModalOpen(true);
    };

    return(
        <div {...{
            className:"cate-item",
            // onClick: ()=> {
            //     history.push(`/exercise?categoryId=${q.id}`)
            //     window.location.reload();
            // }
        }} >
            <div>
                <p>{q?.description}</p>
            </div>
            <div className="edit" onClick={() => showModal(q?.id)}>
                Edit
            </div>
            <Modal {...{
                title: "Question Detail",
                open: isModalOpen,
                onOk: handleOk,
                onCancel: handleCancel,
            }}>
                <div {...{
                    className: "flex flex-row justify-end mb-[24px]"
                }}>
                    <AddOptions {...{
                        setOptions,
                        options
                    }}/>
                </div>
                <Input {...{
                    placeholder: "Question's name",
                    defaultValue: q?.description,
                    onChange: handleChangeDes,
                    value: description
                }}/>
                <div {...{
                    className: "mb-[24px]"
                }}/>
                <div>
                    {options?.map((o) => {
                        return(
                            <div>
                                <p {...{
                                    className: o?.isTrue ? "text-[green]": ""
                                }}>{o?.content}</p>
                            </div>
                        )
                    })}
                </div>

            </Modal>
        </div>
    )
}

const AddOptions = ({options, setOptions}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [content, setContent] = useState("");
    const [isTrue, setIsTrue] = useState(false)
    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }

    const handleOk = () => {
        if(isTrue) {
            const newOptions = options.map((o) => {
                return {
                    content: o.content,
                    isTrue: false,
                }
            })
            setOptions([...newOptions, {
                content,
                isTrue
            }])
            setIsModalOpen(false);
            return;
        }
        setOptions([...options, {
            content,
            isTrue
        }])
        setIsModalOpen(false);
      };

      const handleCancel = () => {
        setIsModalOpen(false);
      };

    return(
        <div>
            <Button {...{
                onClick: ()=> {
                    setIsModalOpen(true);
                }
            }}>
                add options
            </Button>
            <Modal {...{
            title: "Question Detail",
            open: isModalOpen,
            onOk: handleOk,
            onCancel: handleCancel,
        }}>
        <div>
            <Input {...{
                    placeholder: "content",
                    defaultValue: content,
                    onChange: handleChangeContent,
                    value: content
                }}/>
                <Checkbox {...{
                    value: isTrue,
                    onChange: (e)=> {
                        console.log("e.target.value", e.target.checked);
                        setIsTrue(e.target.checked)
                    }
                }}>isTrue</Checkbox>
        </div>
        </Modal>
        </div>
    )
}