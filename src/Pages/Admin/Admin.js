
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Admin = () => {

    const [user, setUser] = useState()

    const getProfile = async () => {
        const res = await axios({
            url: 'http://localhost:8080/users/me',
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        console.log("res", res);
        if(res?.status === 200) {
            setUser(res?.data)
        }
    }

    useEffect(() => {
        getProfile()
    },[])

    return(
        <div {...{
            style: {
                backgroundColor: "gray",
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
                    width: "50vw",
                    height: "50vh",
                    display: "flex",
                    alignItems: "center",
                    padding: "16px",
                    borderRadius: "5px",
                    flexDirection: "column",
                    gap: "12px"
                }
            }}>
                <div {...{
                    style: {
                        width: "100%",
                        height: "30px",
                        // borderRadius: "50%",
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
                Bảng điều khiển
                </p>
                </div>
                {/* <div {...{
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
                        Points
                    </p> */}
                    <div {...{
                        style: {
                            width: "100%",
                            height: "100%",
                            backgroundColor: "wheat",
                            borderRadius: "5px"
                        }
                    }}>

                    </div>
                </div>
            </div>
        // </div>
    )
}