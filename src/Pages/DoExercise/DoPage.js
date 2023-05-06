
import "./do-exercies.css"

import { useEffect, useState } from 'react';
import { Button, Modal, Input} from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Radio } from 'antd';

export const DoPage = (props) => {
    const exerciseId = props.match.params.id;
    const [selectedQ, setSelectedQ] = useState([]);
    const [refesh, setRefesh] = useState(false);
    const [result, setResult] = useState({});
    const [done, setDone] = useState(false)
    const [open, setOpen] = useState(false)
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
    const handleCalculatePoint = () => {
        let totalTrue = 0;
        let total = 0;

        for (let key in result) {
            if (result.hasOwnProperty(key)) {
                if (result[key]) {
                totalTrue++;
                }
                total++;
            }
        }

        const points = totalTrue / total;
        return points
    }

    const handleSubmit = async () => {
        const point = handleCalculatePoint();
        const res = await axios({
            url: `http://localhost:8080/exercises-history`,
            method: 'POST',
            data: {
                exerciseId,
                result: point
            },
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        if(res?.status === 200) {
            setDone(true);
            setOpen(true);
        }
    }

    useEffect(() => {
        getSelectedQ();
    },[refesh])
    return(
        <div className="wrapper">
      <div className="title">
          <h1>Do Exercise</h1>
      </div>
      <div className="list">
        {selectedQ?.map((question, index) => {
            return<Question key={question.id} {...{question, index, setResult, result, done}}/>
        })}
        <div>
            {!done && <Button {...{
                onClick: handleSubmit
            }}>
                Submit
            </Button>}
            {done && !open && <Button {...{
                onClick: () => {
                    setOpen(true)
                }
            }}>
                Show Result
            </Button>}
            <Modal {...{
                open: open,
                onClose: () => {
                    setOpen(false)
                },
                onOk: () => {
                    setOpen(false);
                },
                onCancel: ()=>{
                    setOpen(false);
                }
            }}>
                <div>
                    <div {...{
                        className: "text-center"
                    }}>
                    <p {...{
                        className: "text-[24px]"
                    }}>Kết quả</p>
                    </div>
                    <p>Điểm số : {handleCalculatePoint() * 100}/100</p>
                </div>
            </Modal>
        </div>
      </div>
  </div>
    )
}

const Question = ({question, index, setResult, result, done}) => {
    const [value, setValue] = useState(null);
const handleGetResult = (result) => {
    const parts = result.split(":");
    return parts[1] === "true";
}
    const onChange = (e) => {
        setValue(e.target.value);
        setResult({
            ...result,
            [`${question.id}`]: handleGetResult(e.target.value)
        })
      };

    return(
        <div {...{
            className: "bg-[white] rounded-[12px] mb-[24px] p-[12px]"
        }}>
            <p {...{
                className: ""
            }}>
                Câu: {index}
            </p>
            <div>
                <p {...{
                    className: "font-[500]"
                }}>
                    {question?.description}
                </p>
            </div>
            <div>
            <Radio.Group disabled = {done} onChange={onChange} value={value}>
                {question?.options?.map((option) => {
                    return(
                        <Radio value={`${option.content}:${option.isTrue}`} className={(done && option.isTrue) ? "done-class" : ""}>{option?.content}</Radio>
                    )
                })}
            </Radio.Group>
            </div>
        </div>
    )
}