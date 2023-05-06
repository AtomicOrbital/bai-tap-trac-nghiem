
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./Profile.css"

export const Profile = () => {

    const [user, setUser] = useState();
    const [history, setHistory] = useState([])

    const getProfile = async () => {
        const res = await axios({
            url: 'http://localhost:8080/users/me',
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        if(res?.status === 200) {
            console.log("res?.data", res?.data);
            setUser(res?.data?.userDetails)
            setHistory(res?.data?.exerciseHistory)
        }
    }

    useEffect(() => {
        getProfile()
    },[])

    return(
        <div {...{
            style: {
                backgroundColor: "wheat",
                minWidth: "100vw",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }
        }}>
            <div {...{
                style: {
                    backgroundColor: "#d89a27",
                    width: "80vw",
                    minHeight: "60vh",
                    display: "flex",
                    alignItems: "center",
                    padding: "16px",
                    borderRadius: "5px",
                    flexDirection: "column",
                    gap: "24px"
                }
            }}>
                <div {...{
                    style: {
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        textAlign: "center",
                        backgroundColor: "gray",
                        display: "flex",
                        justifyItems: "center",
                        alignContent: "center",
                        position: "relative",
                    }
                }}>
                <p {...{
                    style: {
                        margin: 0,
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "white"
                    }
                }}>
                {user?.name ?? "UserName"}
                </p>
                </div>
                <div {...{
                    style: {
                        display:"flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "12px"
                    }
                }}>
                    <p {...{
                        style:{
                            fontSize: "18px",
                            fontWeight: "500"
                        }
                    }}>
                        History
                    </p>
                    <div {...{
                        className: "w-[60vw] bg-[#f5f5f5] rounded-[5px] overflow-auto"
                    }}>
                        {history?.map((h) => {
                            return<Exercise key={h} {...{data: h}}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}


const Exercise = ({ data }) => {
    const {exercise} = data
    const formatter = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false
      });
      const createdAtFormatted = formatter.format(data.createdAt);
    return (
      <div className="bg-white shadow p-[12px] mx-auto grid grid-cols-[4fr_1fr]">
        <div>
        <p className="text-xl font-bold">{exercise.name}</p>
        <p className="text-gray-700">{exercise.description}</p>
        <p className="text-gray-500 text-sm mt-2">{createdAtFormatted}</p>
        </div>
        <div {...{
            className: "w-[100%] h-[100%] flex justify-center items-center"
        }}>
            <p {...{
                className: "text-[24px]"
            }}>{data.result * 100}/100</p>
        </div>
        </div>
    );
  };