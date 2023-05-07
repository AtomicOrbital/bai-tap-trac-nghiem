
import "./do-exercies.css"

import { useEffect, useState } from 'react';
import { Button, Modal, Input} from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const params = new URLSearchParams(window.location.search);
const categoryId = params.get('categoryId');

export const DoExercise = () => {
  const [ex, setEx] = useState([]);
  const [refesh, setRefesh] = useState(false);
    const getExercise = async () => {
        const whereObj = {};
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
          <h1>Do Exercise</h1>
      </div>
      <div className="list">
        {ex?.map((exercise) => {
          return <DoExerciseItem key={exercise.id} {...{exercise}}/>
        })}
      </div>
  </div>
    )
}

const DoExerciseItem = ({exercise}) => {
  const history = useHistory();
  const handleClickExercise = () => {
    history.push(`/do-exercise/${exercise.id}`)
  }

  return(
    <div {...{
      className: "py-[12px] border-b-[1px] border-black hover:opacity-[0.6] cursor-pointer",
      onClick: () => {
        handleClickExercise();
      }
    }}>
      <p {...{
        className: "text-[18px] font-[600]"
      }}>{exercise.name}</p>
    </div>
  )
}