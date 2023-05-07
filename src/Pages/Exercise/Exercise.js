
import "./exercise.css"

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Modal, Input} from 'antd';

const params = new URLSearchParams(window.location.search);
const categoryId = params.get('categoryId');

export const Exercise = () => {
    const [ex, setEx] = useState([]);
    const [refesh, setRefesh] = useState(false);
    const getExercise = async () => {
        const whereObj = !!categoryId ? { "categoryId": categoryId } : {};
        const res = await axios({
            url: 'http://localhost:8080/exercises',
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
            params: {
                where: JSON.stringify(whereObj)
            }
        })
        if(res?.status === 200) {
            setEx(res?.data?.data)
        }
    }

    useEffect(() => {
        getExercise()
    },[refesh])

    return(
        <div className="wrapper">
            <div className="title">
                <h1>Exercise</h1>
            </div>
            <div className="list">
                <AddExercise {...{
                    setRefesh
                }}/>
                {ex?.map((c) => {
                    return <ExerciseItem key = {c.id} {...{ex: c, setRefesh: () => setRefesh(!refesh)}}/>
                })}
            </div>
        </div>
    )
}

const AddExercise = ({setRefesh}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const handleOk = async () => {
        const res = await axios({
            url: `http://localhost:8080/exercises`,
            method: 'POST',
            data: {
                name,
                description,
                categoryId
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
      const handleChangeName = (e) => {
        setName(e.target.value)
      }
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
                title: "Create Exercise",
                open: isModalOpen,
                onOk: handleOk,
                onCancel: handleCancel,
            }}>
                <Input {...{
                    placeholder: "Exercise's name",
                    defaultValue: "",
                    onChange: handleChangeName,
                    value: name,
            }}/>
                        <div {...{
                className: "mb-[12px]"
            }}/>
            <Input {...{
                    placeholder: "Exercise's description",
                    defaultValue: "",
                    onChange: handleChangeDes,
                    value: description,
            }}/>
            </Modal>
        </div>
    )
}

const ExerciseItem = ({ex, setRefesh}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState(ex?.name)
    const [description, setDescription] = useState(ex?.description)

    const handleOk = async () => {
        const res = await axios({
            url: `http://localhost:8080/exercises/${ex?.id}`,
            method: 'PUT',
            data: {
                name,
                description
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
      const handleChangeName = (e) => {
        setName(e.target.value)
      }

      const handleChangeDes = (e) => {
        setDescription(e.target.value)
      }

      const showModal = (id) => {
      setIsModalOpen(true);
    };

    return(
        <div className="cate-item">
            <div>
                <p>{ex?.name}</p>
                <p>{ex?.description}</p>
            </div>
            <div className="edit" onClick={() => showModal(ex?.id)}>
                Edit
            </div>
            <Modal {...{
                title: "Exercise Detail",
                open: isModalOpen,
                onOk: handleOk,
                onCancel: handleCancel,
                width: 800
            }}>
                <div {...{
                    className: "grid grid-cols-2 gap-[32px]"
                }}>
                <Input {...{
                    placeholder: "Exercise's name",
                    defaultValue: ex?.cateName,
                    onChange: handleChangeName,
                    value: name
            }}/>
                <Input {...{
                    placeholder: "Exercise's description",
                    defaultValue: ex?.description,
                    onChange: handleChangeDes,
                    value: description
            }}/>
                </div>
                <AddQuestionToExercise {...{exerciseId: ex.id}}/>
            </Modal>
        </div>
    )
}

const AddQuestionToExercise = ({exerciseId}) => {
    const [question, setQuestion] = useState([]);
    const [selectedQ, setSelectedQ] = useState([]);
    const [refesh, setRefesh] = useState(false);
    const getQuestion = async () => {
        const res = await axios({
            url: `http://localhost:8080/exercise-questions/get-exercise-questions-not-selected/${exerciseId}`,
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        if(res?.status === 200) {
            setQuestion(res?.data?.data)
        }
    }
    const getSelectedQ = async () => {
        const res = await axios({
            url: `http://localhost:8080/exercise-questions/get-exercise-questions/${exerciseId}`,
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        if(res?.status === 200) {
            setSelectedQ(res?.data?.data)
        }
    }
    const addQuestion = async (questionId) => {
        await axios({
            url: `http://localhost:8080/exercise-questions`,
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
            data: {
                questionId,
                exerciseId
              }
        })
        setRefesh(!refesh)
    }

    const removeQuestion = async (questionId) => {
        const whereObj = {
            questionId,
            exerciseId
        }
        await axios({
            url: `http://localhost:8080/exercise-questions`,
            method: 'DELETE',
            params:{
                where: JSON.stringify(whereObj)
            },
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
        })
        setRefesh(!refesh)
    }

    useEffect(() => {
        getQuestion();
        getSelectedQ();
    },[refesh])
    return(
        <div {...{
            className: "grid grid-cols-2 gap-[32px] w-[100%] mt-[24px]"
        }}>
            <div {...{
                className: "border-2 border-solid border-black w-[100%] min-h-[500px] p-[12px]"
            }}>
                <div {...{
                    className: "w-[100%] text-center mb-[12px]"
                }}>
                    <p {...{
                        className: "text-[22px]"
                    }}>
                        Kho
                    </p>
                </div>
                <div {...{
                    className: "w-[100%]"
                }}>
                    {question?.map((q) => {
                        return(
                            <div key = {q.id} {...{
                                className: "p-[8px] border-[1px] border-[gray] border-solid mb-[12px] cursor-pointer hover:opacity-[0.8] hover:border-[green] hover:border-[3px]",
                                onClick: () => {
                                    addQuestion(q.id);
                                }
                            }}>
                                <p {...{
                                    className: "mt-0 mb-0"
                                }}>{q.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div {...{
                className: "border-2 border-solid border-black w-[100%] min-h-[500px] p-[12px]"
            }}>
                <div {...{
                    className: "w-[100%] text-center mb-[12px]"
                }}>
                    <p {...{
                        className: "text-[22px]"
                    }}>
                        Đã chọn
                    </p>
                </div>
                <div {...{
                    className: "w-[100%]"
                }}>
                    {selectedQ?.map((q) => {
                        return(
                            <div key = {q.id} {...{
                                className: "p-[8px] border-[1px] border-[gray] border-solid mb-[12px] cursor-pointer hover:opacity-[0.8] hover:border-[red] hover:border-[3px]",
                                onClick: () => {
                                    removeQuestion(q.id);
                                }
                            }}>
                                <p {...{
                                    className: "mt-0 mb-0"
                                }}>{q.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}